let products = JSON.parse(localStorage.getItem("products")) || [];
const list = document.getElementById("list");

function save() {
  localStorage.setItem("products", JSON.stringify(products));
  render();
}

function addProduct() {
  products.push({
    name: name.value,
    price: price.value,
    image: image.value,
    active: true
  });
  save();
}

function toggle(i) {
  products[i].active = !products[i].active;
  save();
}

function del(i) {
  products.splice(i, 1);
  save();
}

function setDrop() {
  localStorage.setItem("dropDate", drop.value);
  alert("Drop date set");
}

function render() {
  list.innerHTML = "";
  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="admin-item">
        <img src="${p.image}">
        <span>${p.name}</span>
        <button onclick="toggle(${i})">${p.active ? "ON" : "OFF"}</button>
        <button onclick="del(${i})">✕</button>
      </div>
    `;
  });
}

render();
