function addProduct() {
  const nameInput = document.getElementById("name").value.trim();
  const priceInput = document.getElementById("price").value.trim();
  const imageInput = document.getElementById("image").value.trim();

  if (!nameInput || !priceInput || !imageInput) {
    alert("Fill all fields");
    return;
  }

  const products = JSON.parse(localStorage.getItem("products") || "[]");

  products.push({
    name: nameInput,              // ✅ CORRECT KEY
    price: Number(priceInput),    // ✅ NUMBER
    image: imageInput,
    active: true
  });

  localStorage.setItem("products", JSON.stringify(products));
  alert("Product added");

  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
}
