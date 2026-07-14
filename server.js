const crypto = require("crypto");
const fs = require("fs");
const fsp = require("fs/promises");
const http = require("http");
const path = require("path");

const ROOT = __dirname;
const STORAGE_DIR = process.env.STORAGE_DIR || ROOT;
const DATA_DIR = path.join(STORAGE_DIR, "data");
const DATA_FILE = path.join(DATA_DIR, "catalog.json");
const STATIC_CATALOG_FILE = path.join(ROOT, "catalog.json");
const UPLOAD_DIR = path.join(STORAGE_DIR, "uploads");
const PORT = Number(process.env.PORT || 3000);

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASSWORD_HASH =
  process.env.ADMIN_PASSWORD_HASH ||
  "6677d8db9844a8f629b683b8eaaf7c1a71ed9614fe7909c8d4313e399df4b548";
const SESSION_MS = 2 * 60 * 60 * 1000;
const sessions = new Map();

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(data));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", chunk => {
      body += chunk;
      if (body.length > 30 * 1024 * 1024) {
        reject(new Error("La solicitud es demasiado grande."));
        request.destroy();
      }
    });

    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function passwordHash(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function cookieValue(request, name) {
  const cookieHeader = request.headers.cookie || "";
  const cookies = cookieHeader.split(";").map(cookie => cookie.trim());
  const match = cookies.find(cookie => cookie.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : "";
}

function isAuthenticated(request) {
  const token = cookieValue(request, "im_server_session");
  const expires = sessions.get(token);

  if (!expires || expires < Date.now()) {
    sessions.delete(token);
    return false;
  }

  sessions.set(token, Date.now() + SESSION_MS);
  return true;
}

async function ensureStorage() {
  await fsp.mkdir(DATA_DIR, { recursive: true });
  await fsp.mkdir(UPLOAD_DIR, { recursive: true });

  try {
    await fsp.access(DATA_FILE);
  } catch (error) {
    await fsp.writeFile(DATA_FILE, JSON.stringify({
      customProducts: [],
      deletedIds: []
    }, null, 2));
  }
}

async function readCatalog() {
  await ensureStorage();
  const text = await fsp.readFile(DATA_FILE, "utf8");

  try {
    const catalog = JSON.parse(text);
    const cleanCatalog = {
      customProducts: Array.isArray(catalog.customProducts) ? catalog.customProducts : [],
      deletedIds: Array.isArray(catalog.deletedIds) ? catalog.deletedIds : []
    };

    if (!cleanCatalog.customProducts.length) {
      return await readStaticCatalogFallback(cleanCatalog);
    }

    return cleanCatalog;
  } catch (error) {
    return await readStaticCatalogFallback({ customProducts: [], deletedIds: [] });
  }
}

async function readStaticCatalogFallback(defaultCatalog) {
  try {
    const text = await fsp.readFile(STATIC_CATALOG_FILE, "utf8");
    const catalog = JSON.parse(text);
    const customProducts = Array.isArray(catalog)
      ? catalog
      : Array.isArray(catalog.customProducts)
        ? catalog.customProducts
        : [];
    const deletedIds = Array.isArray(catalog.deletedIds) ? catalog.deletedIds : defaultCatalog.deletedIds;

    if (customProducts.length) {
      return { customProducts, deletedIds };
    }
  } catch (error) {
  }

  return defaultCatalog;
}

async function saveDataUrl(dataUrl) {
  const match = String(dataUrl).match(/^data:(image\/(?:png|jpeg|jpg|webp|gif));base64,(.+)$/);
  if (!match) return dataUrl;

  const mime = match[1];
  const extension = mime.includes("png")
    ? ".png"
    : mime.includes("webp")
      ? ".webp"
      : mime.includes("gif")
        ? ".gif"
        : ".jpg";
  const buffer = Buffer.from(match[2], "base64");
  const fileName = `admin-${Date.now()}-${crypto.randomBytes(6).toString("hex")}${extension}`;
  const filePath = path.join(UPLOAD_DIR, fileName);

  await fsp.writeFile(filePath, buffer);
  return `images/uploads/${fileName}`;
}

async function normalizeUploadedImages(products) {
  const cleanProducts = [];

  for (const product of products) {
    const images = [];

    for (const image of product.images || []) {
      images.push(await saveDataUrl(image));
    }

    cleanProducts.push({
      ...product,
      images
    });
  }

  return cleanProducts;
}

async function writeCatalog(catalog) {
  await ensureStorage();
  const customProducts = await normalizeUploadedImages(
    Array.isArray(catalog.customProducts) ? catalog.customProducts : []
  );
  const deletedIds = Array.isArray(catalog.deletedIds)
    ? [...new Set(catalog.deletedIds.map(Number).filter(Number.isFinite))]
    : [];
  const cleanCatalog = { customProducts, deletedIds };

  await fsp.writeFile(DATA_FILE, JSON.stringify(cleanCatalog, null, 2));
  return cleanCatalog;
}

async function handleApi(request, response, pathname) {
  if (pathname === "/api/login" && request.method === "POST") {
    const body = JSON.parse(await readBody(request) || "{}");
    const ok = body.username === ADMIN_USER && passwordHash(body.password || "") === ADMIN_PASSWORD_HASH;

    if (!ok) {
      sendJson(response, 401, { error: "Usuario o contraseña incorrecta." });
      return;
    }

    const token = crypto.randomBytes(32).toString("hex");
    sessions.set(token, Date.now() + SESSION_MS);
    response.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8",
      "Set-Cookie": `im_server_session=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${SESSION_MS / 1000}`,
      "Cache-Control": "no-store"
    });
    response.end(JSON.stringify({ ok: true }));
    return;
  }

  if (pathname === "/api/catalog" && request.method === "GET") {
    sendJson(response, 200, await readCatalog());
    return;
  }

  if (pathname === "/api/catalog" && request.method === "PUT") {
    if (!isAuthenticated(request)) {
      sendJson(response, 401, { error: "Inicia sesión otra vez." });
      return;
    }

    const body = JSON.parse(await readBody(request) || "{}");
    sendJson(response, 200, await writeCatalog(body));
    return;
  }

  sendJson(response, 404, { error: "API no encontrada." });
}

async function serveStatic(request, response, pathname) {
  if (pathname.startsWith("/images/uploads/")) {
    const uploadName = path.basename(pathname);
    const uploadPath = path.join(UPLOAD_DIR, uploadName);

    try {
      await fsp.access(uploadPath);
      const extension = path.extname(uploadPath).toLowerCase();
      response.writeHead(200, {
        "Content-Type": MIME_TYPES[extension] || "application/octet-stream"
      });
      fs.createReadStream(uploadPath).pipe(response);
      return;
    } catch (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
  }

  const cleanPath = pathname === "/" ? "/index.html" : decodeURIComponent(pathname);
  const filePath = path.normalize(path.join(ROOT, cleanPath));

  if (!filePath.startsWith(ROOT)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const stat = await fsp.stat(filePath);
    const finalPath = stat.isDirectory() ? path.join(filePath, "index.html") : filePath;
    const extension = path.extname(finalPath).toLowerCase();

    response.writeHead(200, {
      "Content-Type": MIME_TYPES[extension] || "application/octet-stream"
    });
    fs.createReadStream(finalPath).pipe(response);
  } catch (error) {
    response.writeHead(404);
    response.end("Not found");
  }
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (url.pathname.startsWith("/api/")) {
      await handleApi(request, response, url.pathname);
      return;
    }

    await serveStatic(request, response, url.pathname);
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Error del servidor." });
  }
});

server.listen(PORT, () => {
  console.log(`IMPORTADORA MORAZAN running at http://localhost:${PORT}`);
});
