const grid = document.getElementById("products");
const currencySelect = document.getElementById("currency");

let products = JSON.parse(localStorage.getItem("products")) || [];

function render() {
  grid.innerHTML = "";

  products.forEach((p, i) => {
    if (!p.active) return;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.price} ${currencySelect.value}</p>
      <button>BUY</button>
    `;

    grid.appendChild(card);
  });
}

currencySelect.onchange = render;
render();
