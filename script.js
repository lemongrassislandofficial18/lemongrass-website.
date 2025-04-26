// JavaScript for cart functionality
const cart = [];

// Kemaskini bilangan item di header
function updateCartCount() {
    const countSpan = document.getElementById('cart-count');
    countSpan.textContent = cart.length;
}

// Buka overlay keranjang
function openCart() {
    document.getElementById('cart-overlay').classList.remove('hidden');
    renderCartItems();
}

// Tutup overlay keranjang
function closeCart() {
    document.getElementById('cart-overlay').classList.add('hidden');
}

// Tambah item ke keranjang
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
}

// Papar item dalam overlay
function renderCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Kosongkan dahulu
    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.textContent = `${item.name} - RM${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
        total += parseFloat(item.price);
    });
    // Papar jumlah jika ada item
    if (cart.length > 0) {
        const totalDiv = document.createElement('div');
        totalDiv.className = 'cart-total';
        totalDiv.textContent = `Total: RM${total.toFixed(2)}`;
        cartItemsDiv.appendChild(totalDiv);
    } else {
        cartItemsDiv.textContent = 'Your cart is empty.';
    }
}

// Tetapan event selepas DOM sedia
document.addEventListener('DOMContentLoaded', () => {
    // Pada setiap butang "Add to Cart"
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.product-card');
            const name = card.getAttribute('data-name');
            const price = card.getAttribute('data-price');
            addToCart(name, price);
        });
    });
    // Buka overlay bila ikon Cart diklik
    document.getElementById('cart-icon').addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });
    // Tutup overlay bila ✕ diklik
    document.getElementById('close-cart').addEventListener('click', closeCart);
    // Checkout – alihkan ke ToyyibPay
    document.getElementById('checkout-btn').addEventListener('click', () => {
        window.location.href = 'https://toyyibpay.com/123456'; // Gantikan dengan pautan ToyyibPay sebenar
    });
});