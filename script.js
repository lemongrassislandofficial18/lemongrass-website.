// Product stock
const products = {
  1: { name: "Classic T-Shirt", stock: 20, price: 89 },
  2: { name: "Signature Hoodie", stock: 10, price: 179 }
};

const cartItems = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.product-card');
    const id = card.getAttribute('data-id');
    const size = card.querySelector('.size').value;
    if (products[id].stock > 0) {
      cartItems.push({ id, size });
      products[id].stock--;
      card.querySelector('.stock').innerText = products[id].stock;
      document.getElementById('cart-count').innerText = cartItems.length;
      alert('Added to cart!');
    } else {
      alert('Sold out!');
    }
  });
});

document.querySelector('.cart-btn').addEventListener('click', () => {
  document.getElementById('cart').classList.remove('hidden');
  updateCart();
});

document.getElementById('close-cart').addEventListener('click', () => {
  document.getElementById('cart').classList.add('hidden');
});

function updateCart() {
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${products[item.id].name} - Size ${item.size}`;
    cartList.appendChild(li);
  });
}

document.getElementById('checkout').addEventListener('click', () => {
  window.location.href = 'https://toyyibpay.com/your-payment-link'; // Ganti dengan link anda
});

// Image slider hover
document.querySelectorAll('.product-slider').forEach(slider => {
  slider.addEventListener('mouseover', () => {
    slider.children[1].classList.remove('hidden');
  });
  slider.addEventListener('mouseout', () => {
    slider.children[1].classList.add('hidden');
  });
});
