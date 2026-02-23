const rates = {
  USD: 1,
  EUR: 0.9,
  INR: 83,
  JPY: 150,
  GBP: 0.78,
  DNR: 0.31
};

function renderStore() {
  const store = document.getElementById("store");
  const items = JSON.parse(localStorage.getItem("items") || "[]");
  const currency = document.getElementById("currency").value;

  store.innerHTML = "";

  items.forEach((item, i) => {
    if (!item.visible) return;

    const price = Math.round(item.price * rates[currency]);

    store.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>${price} ${currency}</p>
        <button>BUY</button>
      </div>
    `;
  });
}

renderStore();
