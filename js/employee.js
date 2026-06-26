const ordersList = document.getElementById("employeeOrders");
const refreshBtn = document.getElementById("refreshBtn");
const filterButtons = document.querySelectorAll(".filter-btn");
const employeeLoginScreen = document.getElementById("employeeLoginScreen");
const employeeApp = document.getElementById("employeeApp");

const EMPLOYEE_USER = "empleado";
const EMPLOYEE_PASSWORD_HASH = "ccc13e8ab0819e3ab61719de4071ecae6c1d3cd35dc48b91cad3481f20922f9f";
const EMPLOYEE_SESSION_KEY = "im_employee_session_expires";
const EMPLOYEE_SESSION_MS = 8 * 60 * 60 * 1000;

let products = JSON.parse(localStorage.getItem("im_products")) || [];
let orders = JSON.parse(localStorage.getItem("im_orders")) || [];
let currentFilter = "pending";

async function hashText(text) {
  if (!window.crypto || !crypto.subtle) {
    throw new Error("Secure password check is not available in this browser.");
  }

  const encoded = new TextEncoder().encode(text);
  const buffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(buffer))
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
}

function isEmployeeLoggedIn() {
  const expires = Number(sessionStorage.getItem(EMPLOYEE_SESSION_KEY));
  return expires && Date.now() < expires;
}

function showEmployeeApp() {
  sessionStorage.setItem(EMPLOYEE_SESSION_KEY, String(Date.now() + EMPLOYEE_SESSION_MS));
  employeeLoginScreen.classList.add("hidden");
  employeeApp.classList.remove("hidden");
  employeeApp.hidden = false;
  refreshData();
}

async function employeeLogin(event) {
  event.preventDefault();

  const user = document.getElementById("employeeUsername").value.trim();
  const pass = document.getElementById("employeePassword").value.trim();

  try {
    const passwordHash = await hashText(pass);

    if (user === EMPLOYEE_USER && passwordHash === EMPLOYEE_PASSWORD_HASH) {
      showEmployeeApp();
      return;
    }

    alert("Usuario o contraseña incorrecta.");
  } catch (error) {
    alert("Este navegador no puede verificar la contraseña. Usa Chrome, Safari, Edge o Firefox actualizado.");
  }
}

function employeeLogout() {
  sessionStorage.removeItem(EMPLOYEE_SESSION_KEY);
  location.reload();
}

function money(price) {
  return Number(price).toLocaleString("es-CR");
}

function saveOrders() {
  localStorage.setItem("im_orders", JSON.stringify(orders));
}

function refreshData() {
  products = JSON.parse(localStorage.getItem("im_products")) || [];
  orders = JSON.parse(localStorage.getItem("im_orders")) || [];
  renderOrders();
}

function employeeImageSrc(image) {
  if (!image) return "";
  if (/^(https?:|data:|\/)/.test(image)) return image;
  if (image.startsWith("../")) return image;
  return `../${image}`;
}

function findProductImage(orderProduct) {
  if (orderProduct.image) return employeeImageSrc(orderProduct.image);

  const product = products.find(item =>
    item.nameEs === orderProduct.nameEs || item.nameZh === orderProduct.nameZh
  );

  return employeeImageSrc(product?.images?.[0] || "");
}

function findProductSize(orderProduct) {
  if (orderProduct.size) return orderProduct.size;

  const product = products.find(item =>
    item.nameEs === orderProduct.nameEs || item.nameZh === orderProduct.nameZh
  );

  return product?.size || "";
}

function isProductReady(orderProduct) {
  return orderProduct.ready === true;
}

function isOrderReady(order) {
  const orderProducts = order.products || [];
  return orderProducts.length > 0 && orderProducts.every(isProductReady);
}

function visibleOrders() {
  if (currentFilter === "all") return orders;

  return orders.filter(order => {
    const ready = isOrderReady(order);
    return currentFilter === "ready" ? ready : !ready;
  });
}

function renderOrders() {
  const filteredOrders = visibleOrders().slice().reverse();
  ordersList.innerHTML = "";

  if (filteredOrders.length === 0) {
    ordersList.innerHTML = `<p class="empty-message">No hay pedidos para mostrar.</p>`;
    return;
  }

  filteredOrders.forEach(order => {
    const ready = isOrderReady(order);
    const orderProducts = order.products || [];
    const productsHtml = orderProducts.map((product, index) => {
      const image = findProductImage(product);
      const size = findProductSize(product);
      const productReady = isProductReady(product);

      return `
        <div class="employee-product ${productReady ? "ready" : ""}">
          <img src="${image}" alt="${product.nameEs}" onerror="this.style.display='none'">
          <div>
            <h3>${product.nameEs}</h3>
            ${size ? `<p><strong>Tamaño:</strong> ${size}</p>` : ""}
            <p><strong>Cantidad:</strong> ${product.quantity}</p>
            <p><strong>Precio:</strong> ₡${money(product.price)}</p>
            <p><strong>Total producto:</strong> ₡${money(product.price * product.quantity)}</p>
          </div>
          <button
            class="${productReady ? "undo-btn" : "ready-btn"}"
            onclick="toggleProductReady('${order.id}', ${index})">
            ${productReady ? "Quitar alistado" : "Alistado"}
          </button>
        </div>
      `;
    }).join("");

    ordersList.innerHTML += `
      <article class="order-card">
        <div class="order-top">
          <div>
            <h2>Pedido</h2>
            <p><strong>Cliente:</strong> ${order.name}</p>
            <p><strong>Teléfono:</strong> ${order.phone}</p>
            <p><strong>Dirección:</strong> ${order.address}</p>
            ${order.note ? `<p><strong>Nota:</strong> ${order.note}</p>` : ""}
            <p><strong>Total:</strong> ₡${money(order.total)}</p>
          </div>
          <span class="status-pill ${ready ? "ready" : ""}">
            ${ready ? "Alistado" : "Pendiente"}
          </span>
        </div>

        <div class="employee-products">
          ${productsHtml}
        </div>
      </article>
    `;
  });
}

function toggleProductReady(orderId, productIndex) {
  orders = orders.map(order => {
    if (String(order.id) !== String(orderId)) return order;

    const productsCopy = order.products.map((product, index) => {
      if (index !== productIndex) return product;
      return { ...product, ready: !product.ready };
    });

    return { ...order, products: productsCopy };
  });

  saveOrders();
  renderOrders();
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    renderOrders();
  });
});

refreshBtn.addEventListener("click", refreshData);

if (isEmployeeLoggedIn()) {
  showEmployeeApp();
} else {
  employeeLoginScreen.classList.remove("hidden");
  employeeApp.classList.add("hidden");
  employeeApp.hidden = true;
}
