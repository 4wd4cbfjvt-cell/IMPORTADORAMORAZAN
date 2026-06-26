IMPORTADORA MORAZÁN - COMPLETE STARTER

How to open customer website:
1. Open index.html

How to run the version with live admin saving:
1. Run: npm start
2. Open http://localhost:3000
3. Open http://localhost:3000/admin

How to publish on Render:
1. Push this folder to a GitHub repository.
2. In Render, create a new Blueprint from the repository.
3. Render will read render.yaml and create the Node web service.
4. Keep the persistent disk mounted at /var/data.
5. Open the Render URL, then open /admin to add products.

How to open admin dashboard:
1. Open admin/index.html
2. Login with the private admin username and password.

How to open employee order dashboard:
1. Open employee/index.html

Important:
This is a starter demo that works on your computer using localStorage.
It is good for testing design, products, cart, language switch, and admin dashboard.
The admin page has a basic browser login, failed-attempt lockout, and expiring sessions.
Use "Guardar catálogo" in the admin to download a product backup for publishing later.
Use "Importar catálogo" to restore that product backup in the admin.
For a public online store, true security still needs a real server/database login.

When you want the real online version:
- Publish on hosting that can run Node.js
- Use the Node server in server.js
- Set ADMIN_USER and ADMIN_PASSWORD_HASH on the host
- Keep STORAGE_DIR on the persistent disk path
- Real hosting
- Real domain
