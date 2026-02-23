const productsEl = document.getElementById("products");

const products = JSON.parse(localStorage.getItem("products") || "[]");

productsEl.innerHTML = "";

products
  .filter(p => p.active && p.name && p.price && p.image)
  .forEach(p => {
    productsEl.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <a class="btn">BUY</a>
      </div>
    `;
  });
