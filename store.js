const productsEl = document.getElementById("products");

const products =
  JSON.parse(localStorage.getItem("products") || "[]")
  .filter(p => p.active);

products.forEach(p => {
  productsEl.innerHTML += `
    <div class="product">
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <a class="btn">BUY</a>
    </div>
  `;
});
