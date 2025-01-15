// Function to check if user is logged in
function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

// Function to set login state
function setLoginState(state) {
  localStorage.setItem("isLoggedIn", state);
}

// Function to handle login and set login state
function handleLogin(event) {
  event.preventDefault(); // Prevent default form submission
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform validation here (e.g., check credentials against a database)
  if (username === "username" && password === "password") {
    setLoginState(true);
    alert("Logged in successfully!");
    window.location.href = "product.html"; // Redirect to the product page
  } else {
    alert("Invalid credentials. Please try again.");
  }
}

// Function to handle logout and clear login state
function handleLogout() {
  localStorage.removeItem("isLoggedIn");
  alert("Logged out successfully!");
  window.location.href = "index.html"; // Redirect to the home page
}

// Function to render logout button if user is logged in
function renderLogoutButton() {
  const logoutContainer = document.getElementById("logoutContainer");
  if (isLoggedIn()) {
    const logoutButton = document.createElement("button");
    logoutButton.id = "logoutBtn";
    logoutButton.textContent = "Logout";
    logoutButton.addEventListener("click", handleLogout);
    logoutContainer.appendChild(logoutButton);
  }
}

// Function to redirect to login page
function redirectToLogin() {
  const logInContainer = document.createElement("logInContainer");
  alert("You need to login first!");

  window.location.href = "login_customer.html";
}

// Function to redirect to payment page
function redirectToPayment() {
  alert("Proceeding to payment!");
  window.location.href = "deliv_info.html";
}

// Function to handle Buy Now button click
function proceedToPayment() {
  if (isLoggedIn()) {
    redirectToPayment();
  } else {
    redirectToLogin();
  }
}

// Check login state on page load and render logout button if logged in
window.onload = function () {
  renderLogoutButton();
};

// Event listener for Buy Now button
document.querySelectorAll("#buyNowBtn").forEach((button) => {
  button.addEventListener("click", function () {
    proceedToPayment();
  });
});

// Event listener for login form submission
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

// Example functions for addToCart and buyNow
function addToCart() {
  alert("Added to Cart!");
}

function buyNow() {
  const purchaseCode = generatePurchaseCode();
  document.getElementById("purchaseCode").textContent =
    "Purchase Code: " + purchaseCode;
  alert("Purchase successful! Your code: " + purchaseCode);
}

function generatePurchaseCode() {
  return "PUR-" + Math.floor(Math.random() * 1000000);
}
