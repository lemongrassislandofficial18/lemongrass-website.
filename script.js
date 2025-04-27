// Simpan produk dalam array
const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 89,
    stock: {
      S: 5,
      M: 7,
      L: 5,
      XL: 3,
    },
    images: [
      "https://imgur.com/S1KzW0B.jpg",
      "/https://imgur.com/NBg3gai.jpg"
    ],
    paymentLink: "https://your-payment-link-tshirt.com"
  },
  {
    id: 2,
    name: "Signature Hoodie",
    price: 179,
    stock: {
      S: 2,
      M: 3,
      L: 3,
      XL: 2,
    },
    images: [
      "https://imgur.com/73LuUzy.jpg",
      "https://imgur.com/2UjaGBY.jpg"
    ],
    paymentLink: "https://your-payment-link-hoodie.com"
  }
];

// Troli kosong mula-mula
let cart = [];

// Update paparan produk
function renderProducts() {
  const productContainer = document.getElementById("product-list");
  productContainer.innerHTML = "";

  products.forEach((product, index) => {
    const sizes = Object.keys(product.stock).map(size => {
      const quantity = product.stock[size];
      return `<option value="${size}" ${quantity === 0 ? "disabled" : ""}>
        ${size} (${quantity} left)
      </option>`;
    }).join("");

    const productHTML = `
      <div class="product-card">
        <div class="product-carousel" id="carousel-${index}">
          ${product.images.map((img, idx) => `
            <img src="${img}" class="carousel-img ${idx === 0 ? 'active' : ''}" alt="${product.name}">
          `).join("")}
        </div>
        <h3>${product.name}</h3>
        <p><strong>RM${product.price}</strong></p>
        <select id="size-select-${product.id}">
          <option value="">Pilih Saiz</option>
          ${sizes}
        </select>
        <button onclick="addToCart(${product.id})" class="btn">Pre-Order</button>
      </div>
    `;
    productContainer.innerHTML += productHTML;

    // Activate carousel
    setupCarousel(index);
  });
}

// Fungsi tambah ke troli
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const sizeSelect = document.getElementById(`size-select-${productId}`);
  const selectedSize = sizeSelect.value;

  if (!selectedSize) {
    alert("Sila pilih saiz dulu!");
    return;
  }

  if (product.stock[selectedSize] <= 0) {
    alert("Maaf, stok saiz ini telah habis.");
    return;
  }

  // Kurangkan stok
  product.stock[selectedSize]--;

  // Update troli
  cart.push({
    ...product,
    selectedSize
  });

  alert(`${product.name} (Saiz ${selectedSize}) telah ditambah ke Pre-Order!`);

  // Redirect ke pembayaran
  window.open(product.paymentLink, "_blank");

  // Refresh produk
  renderProducts();
}

// Fungsi gambar carousel auto geser
function setupCarousel(index) {
  const carousel = document.getElementById(`carousel-${index}`);
  const images = carousel.querySelectorAll(".carousel-img");
  let current = 0;

  carousel.addEventListener("click", () => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  });
}

// Mula render produk
renderProducts();
