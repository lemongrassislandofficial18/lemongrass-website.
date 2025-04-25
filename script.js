
document.addEventListener('DOMContentLoaded', () => {
  const tshirtStock = document.getElementById('tshirt-stock');
  const hoodieStock = document.getElementById('hoodie-stock');

  let stockData = {
    tshirt: 20,
    hoodie: 10
  };

  function updateStockDisplay() {
    tshirtStock.textContent = stockData.tshirt <= 0 ? 'Sold Out' : stockData.tshirt;
    hoodieStock.textContent = stockData.hoodie <= 0 ? 'Sold Out' : stockData.hoodie;
  }

  updateStockDisplay();
});
