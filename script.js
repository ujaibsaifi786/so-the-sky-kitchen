let cart = [];
let total = 0;

const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const name = item.querySelector('h3').textContent;
    const priceText = item.querySelector('.price').textContent;
    const price = parseInt(priceText.replace('₹', '').replace('+', ''));

    cart.push({ name, price });
    total += price;

    cartCount.textContent = cart.length;
    cartTotal.textContent = total;

    alert(`${name} added to cart!`);
  });
});

document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Thank you! Proceeding to checkout...\nTotal items: ${cart.length}\nTotal: ₹${total}`);
    // Yahan future mein payment page ya WhatsApp redirect kar sakte ho
  }
});