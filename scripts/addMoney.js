document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addNumber = getInputValueById("add-number");
    const addPIN = getInputValueById("add-pin");
    const addAmount = getInputValueById("add-amount");
    const mainBalance = getInnerHTMLByID("main-balance");
    const convertedMainBalance = parseFloat(mainBalance);
    const sum = convertedMainBalance + addAmount;
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    if (checkNumber(addNumber)) {
      if (checkPin(addPIN)) {
        if (addAmount > 0) {
          document.getElementById("main-balance").innerText = sum;
          addTransactionDiv(
            transactionContainer,
            "Add Money",
            addAmount,
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
