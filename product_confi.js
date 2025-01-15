
// function generateUniqueNumber() { 
//     // Using current timestamp and a random number to ensure uniqueness 
//     const uniqueNumber = 'ORDER-' + Date.now() + '-' + Math.floor(Math.random() * 1000000); 
//     return uniqueNumber; } 
//     function setUniqueNumber() { 
//         const piElement = document.getElementById("pi"); 
//         const uniqueNumber = generateUniqueNumber(); 
//         piElement.textContent = uniqueNumber; } // Call the function to set the unique number on page load 
//         // window.onload = setUniqueNumber;

        // function generateUniqueNumber() {
        //     const uniqueNumber = 'ORDER-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
        //     console.log("Generated Unique Number: ", uniqueNumber);
        //     return uniqueNumber;
        // }
        
        // function setUniqueNumber() {
        //     const piElement = document.getElementById("pi");
        //     if (piElement) {
        //         const uniqueNumber = generateUniqueNumber();
        //         piElement.textContent = uniqueNumber;
        //         console.log("Unique number set in the element");
        //     } else {
        //         console.error("Element with id 'pi' not found");
        //     }
        // }
        
// Function to generate a unique order ID
function generateOrderId() {
    const timestamp = Date.now(); // Get the current timestamp
    const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
    return `ORD-${timestamp}-${randomNum}`;
  }
  
  // Function to set the unique order ID in the confirmation page
  function setUniqueNumber() {
    const orderId = generateOrderId(); // Generate the order ID
    localStorage.setItem('orderId', orderId); // Save the order ID in localStorage for the confirmation page
  }
  
  // Function to display the order ID on the confirmation page
  function displayOrderId() {
    const orderId = localStorage.getItem('orderId'); // Retrieve the order ID from localStorage
    if (orderId) {
      document.getElementById('pi').textContent = orderId; // Display the order ID in the specified element
    } else {
      document.getElementById('pi').textContent = 'Order ID not found.';
    }
  }
  
  // Automatically display the order ID when the confirmation page loads
  document.addEventListener('DOMContentLoaded', displayOrderId);
  