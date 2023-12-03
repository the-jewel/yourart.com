let cart = [];

function addToCart(productName, price) {
  const product = { name: productName, price: price };
  cart.push(product);
  console.log(cart); // For demonstration purposes
  updateCartUI(); // Call a function to update the cart display
}

function updateCartUI() {
  // Update the UI of the cart
  // This could be adding items to a list or updating a cart icon number
  const cartContainer = document.getElementById('cart-container'); // Add this container in your HTML
  cartContainer.innerHTML = ''; // Clear the cart container

  cart.forEach((item, index) => {
    cartContainer.innerHTML += `<div>Item: ${item.name}, Price: ${item.price}</div>`;
  });
}
