// cart.js
function addItem(name, price) {
  const itemContainer = document.createElement("div");
  itemContainer.className = "item";

  const itemName = document.createElement("span");
  itemName.textContent = name;
  itemContainer.appendChild(itemName);

  const itemQuantity = document.createElement("input");
  itemQuantity.type = "number";
  itemQuantity.value = 1;
  itemQuantity.min = 1;
  itemQuantity.className = "quantity";
  itemQuantity.setAttribute("data-price", price);
  itemQuantity.addEventListener("change", updateTotal);
  itemContainer.appendChild(itemQuantity);

  const itemPrice = document.createElement("span");
  itemPrice.className = "price";
  itemPrice.textContent = "Rs: " + price;
  itemContainer.appendChild(itemPrice);

  document.querySelector(".cart-items").appendChild(itemContainer);
  updateTotal();
}

function addToCart(name, price) {
  addItem(name, price);
}

function updateTotal() {
  let total = 0;
  const quantities = document.querySelectorAll(".quantity");
  quantities.forEach((quantity) => {
    const price = quantity.getAttribute("data-price");
    total += quantity.value * price;
  });
  document.getElementById("totalPrice").textContent = "Rs: " + total;
}

function checkout() {
  alert(
    "Proceeding to checkout with total price: " +
      document.getElementById("totalPrice").textContent
  );
}
