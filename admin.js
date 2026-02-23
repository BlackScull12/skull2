function addProduct() {
  const products = JSON.parse(localStorage.getItem("products") || "[]");

  products.push({
    name: name.value,
    price: price.value,
    image: image.value,
    active: true
  });

  localStorage.setItem("products", JSON.stringify(products));
  alert("Product added");
}

function setDrop() {
  localStorage.setItem("dropDate", drop.value);
  alert("Drop date saved");
}
