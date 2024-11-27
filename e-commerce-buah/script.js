// Nav
const hamburger = document.querySelector(".navlink");
const btnhamburger = document.querySelector(".btnhamburger input");

btnhamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
});

// checkout
const checkout = document.querySelector(".checkout");
const buahsubmitButtons = document.querySelectorAll(".buah-submit");

buahsubmitButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    checkout.classList.toggle("nyala");
    event.stopPropagation();
  });
});

document.addEventListener("click", function (event) {
  if (!checkout.contains(event.target)) {
    checkout.classList.remove("nyala");
  }
});

// Jumlah Buah
const hargaPerBarang = 5000;
const quantityInput = document.getElementById("quantity");
const totalPriceDisplay = document.getElementById("total-harga");

// Update total harga saat jumlah barang berubah
quantityInput.addEventListener("input", () => {
  const quantity = parseInt(quantityInput.value) || 1; // Default 1 jika kosong
  const totalPrice = quantity * hargaPerBarang;
  totalPriceDisplay.textContent = `Rp ${totalPrice.toLocaleString()}`;
});
