const API_URL = "https://YOUR_BACKEND_URL";
const grid = document.getElementById("grid");

fetch(`${API_URL}/api/products`)
  .then(res => res.json())
  .then(products => {
    grid.innerHTML = "";
    products.forEach(p => {
      grid.innerHTML += `
        <div class="card">
          <img src="${p.image}">
          <h3>${p.name}</h3>
          <p>${p.price}</p>
          <button>BUY</button>
        </div>
      `;
    });
  });
