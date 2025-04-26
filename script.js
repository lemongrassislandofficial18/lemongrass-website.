const stockData = {
  tshirt: { S: 5, M: 0, L: 2, XL: 0 },
  hoodie: { S: 1, M: 0, L: 3, XL: 0 }
};

function updateStock(selectElement, type) {
  const size = selectElement.value;
  const stock = stockData[type][size];
  const stockDisplay = document.getElementById(`stock-${type}`);
  const button = selectElement.closest(".product-card").querySelector(".btn");
  const originalLink = button.dataset.href;

  if (stock > 0) {
    stockDisplay.textContent = `Stok: ${stock} helai`;
    button.classList.remove("sold-out");
    button.textContent = "Pre-Order & Bayar";
    button.setAttribute("href", originalLink);
    button.setAttribute("target", "_blank");
  } else {
    stockDisplay.textContent = "Sold Out";
    button.classList.add("sold-out");
    button.textContent = "Sold Out";
    button.removeAttribute("href");
    button.removeAttribute("target");
  }
}

// Auto update stok bila laman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll("select");
  selects.forEach(select => {
    const type = select.getAttribute("onchange").match(/'(.*?)'/)[1];
    updateStock(select, type);
  });
});

// Auto slide images
setInterval(() => {
  document.querySelectorAll(".image-slider").forEach(slider => {
    const images = slider.querySelectorAll(".slider-img");
    let current = Array.from(images).findIndex(img => img.classList.contains("active"));
    images[current].classList.remove("active");
    const next = (current + 1) % images.length;
    images[next].classList.add("active");
  });
}, 3000);