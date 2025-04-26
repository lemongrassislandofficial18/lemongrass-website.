// Open/Close Cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");

cartIcon.addEventListener('click', () => {
    cart.classList.toggle("open");
});

closeCart.addEventListener('click', () => {
    cart.classList.remove("open");
});

// Cart Functionality
let cartItems = [];

function addToCart(productName, size, price) {
    const existingItem = cartItems.find(item => item.name === productName && item.size === size);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ name: productName, size: size, price: price, quantity: 1 });
    }
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} (${item.size}) x${item.quantity}`;
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = `Total: RM ${total.toFixed(2)}`;

    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.href = `https://toyyibpay.com/dummy-link`; // Ganti dengan link sebenar nanti
}

// Attach event listeners to Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const size = productCard.querySelector('select').value;
        const price = parseFloat(productCard.querySelector('.price').textContent.replace('RM ', ''));
        
        if (size === "") {
            alert('Please select a size.');
            return;
        }

        addToCart(productName, size, price);
    });
});

// Update stock (Dummy example, can connect to database later)
function updateStock(productId, size) {
    console.log(`Stock updated for product ${productId} size ${size}`);
    // Later you can fetch and update real database stock
}
