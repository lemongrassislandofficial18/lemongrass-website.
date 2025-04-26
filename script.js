const stockData = {
  tshirt: { S: 5, M: 5, L: 5, XL: 5 },
  hoodie: { S: 2, M: 2, L: 3, XL: 3 }
};

function updateStock(selectElement, type) {
  const size = selectElement.value;
  const stock = stockData[type][size];
  const stockDisplay = document.getElementById(`stock-${type}`);
  if (stock > 0) {
    stockDisplay.textContent = `Stok: ${stock} helai`;
  } else {
    stockDisplay.textContent = `Sold Out`;
  }
}

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
