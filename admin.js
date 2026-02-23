function setDrop() {
  localStorage.setItem("dropDate", document.getElementById("drop").value);
  alert("Drop saved");
}

function addItem() {
  const items = JSON.parse(localStorage.getItem("items") || "[]");

  items.push({
    name: name.value,
    price: Number(price.value),
    image: image.value,
    visible: true
  });

  localStorage.setItem("items", JSON.stringify(items));
  renderItems();
}

function toggle(i) {
  const items = JSON.parse(localStorage.getItem("items"));
  items[i].visible = !items[i].visible;
  localStorage.setItem("items", JSON.stringify(items));
  renderItems();
}

function removeItem(i) {
  const items = JSON.parse(localStorage.getItem("items"));
  items.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(items));
  renderItems();
}

function renderItems() {
  const el = document.getElementById("items");
  const items = JSON.parse(localStorage.getItem("items") || "[]");
  el.innerHTML = "";

  items.forEach((item, i) => {
    el.innerHTML += `
      <div>
        ${item.name} - ${item.visible ? "ON" : "OFF"}
        <button onclick="toggle(${i})">TOGGLE</button>
        <button onclick="removeItem(${i})">✖</button>
      </div>
    `;
  });
}

renderItems();
