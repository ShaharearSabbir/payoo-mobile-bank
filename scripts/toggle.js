document.getElementById("logo-image").addEventListener("click", function () {
  displayProperty("transaction-section", "block");
  displayProperty("add-money-section", "none");
  displayProperty("Cashout-section", "none");
  displayProperty("all-transactions-section", "none");
  displayProperty("transfer-section", "none");
});
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    displayProperty("add-money-section", "block");
    displayProperty("Cashout-section", "none");
    displayProperty("transaction-section", "none");
    displayProperty("all-transactions-section", "none");
    displayProperty("transfer-section", "none");
  });

document.getElementById("cashout-card").addEventListener("click", function () {
  displayProperty("Cashout-section", "block");
  displayProperty("add-money-section", "none");
  displayProperty("transaction-section", "none");
  displayProperty("all-transactions-section", "none");
  displayProperty("transfer-section", "none");
});

document
  .getElementById("transaction-card")
  .addEventListener("click", function () {
    displayProperty("all-transactions-section", "block");
    displayProperty("Cashout-section", "none");
    displayProperty("add-money-section", "none");
    displayProperty("transaction-section", "none");
    displayProperty("transfer-section", "none");
  });

document.getElementById("transfer-card").addEventListener("click", function () {
  displayProperty("transfer-section", "block");
  displayProperty("all-transactions-section", "none");
  displayProperty("Cashout-section", "none");
  displayProperty("add-money-section", "none");
  displayProperty("transaction-section", "none");
});
