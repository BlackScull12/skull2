const API_URL = "https://YOUR_BACKEND_URL";
let token = "";

function login() {
  fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: pass.value })
  })
    .then(r => r.json())
    .then(d => {
      token = d.token;
      panel.hidden = false;
      load();
    });
}

function load() {
  fetch(`${API_URL}/api/products/all`, {
    headers: { authorization: token }
  })
    .then(r => r.json())
    .then(p => {
      list.innerHTML = "";
      p.forEach(i => {
        list.innerHTML += `
          <div class="admin-item">
            ${i.name}
            <button onclick="toggle('${i._id}', ${!i.active})">
              ${i.active ? "ON" : "OFF"}
            </button>
            <button onclick="del('${i._id}')">✕</button>
          </div>
        `;
      });
    });
}

function add() {
  fetch(`${API_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token
    },
    body: JSON.stringify({
      name: name.value,
      price: price.value,
      image: img.value
    })
  }).then(load);
}

function toggle(id, active) {
  fetch(`${API_URL}/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: token
    },
    body: JSON.stringify({ active })
  }).then(load);
}

function del(id) {
  fetch(`${API_URL}/api/products/${id}`, {
    method: "DELETE",
    headers: { authorization: token }
  }).then(load);
}

function setDrop() {
  fetch(`${API_URL}/api/drop`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token
    },
    body: JSON.stringify({ date: drop.value })
  });
}
