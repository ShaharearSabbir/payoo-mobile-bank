document
  .getElementById("bill-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const billNumber = getInputValueById("bill-number");
    const billPIN = getInputValueById("bill-pin");
    const billAmount = getInputValueById("bill-amount");
    const mainBalance = getInnerHTMLByID("main-balance");
    const convertedMainBalance = parseFloat(mainBalance);
    const sum = convertedMainBalance - billAmount;
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    if (checkNumber(billNumber)) {
      if (checkPin(billPIN)) {
        if (billAmount > 0) {
          document.getElementById("main-balance").innerText = sum;
          addTransactionDiv(
            transactionContainer,
            "Bill Paid",
            billAmount,
            getTime()
          );
          document.getElementById("all-transactions-container").innerHTML =
            document.getElementById("transaction-container").innerHTML;
        } else {
          alert("Amount is invalid");
        }
      } else {
        alert("PIN is invalid");
      }
    } else {
      alert("Account Number is Invalid");
    }
  });
