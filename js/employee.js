const ordersList = document.getElementById("employeeOrders");
const refreshBtn = document.getElementById("refreshBtn");
const filterButtons = document.querySelectorAll(".filter-btn");

let products = JSON.parse(localStorage.getItem("im_products")) || [];
let orders = JSON.parse(localStorage.getItem("im_orders")) || [];
let currentFilter = "pending";

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

function findProductImage(orderProduct) {
  if (orderProduct.image) return orderProduct.image;

  const product = products.find(item =>
    item.nameEs === orderProduct.nameEs || item.nameZh === orderProduct.nameZh
  );

  return product?.images?.[0] || "";
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

renderOrders();
