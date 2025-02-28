document
  .getElementById("trans-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const transNumber = getInputValueById("trans-number");
    const transPIN = getInputValueById("trans-pin");
    const transAmount = getInputValueById("trans-amount");
    const mainBalance = getInnerHTMLByID("main-balance");
    const convertedMainBalance = parseFloat(mainBalance);
    const sum = convertedMainBalance - transAmount;
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    if (checkNumber(transNumber)) {
      if (checkPin(transPIN)) {
        if (transAmount > 0) {
          if (parseFloat(mainBalance) > transAmount) {
            document.getElementById("main-balance").innerText = sum;
            addTransactionDiv(
              transactionContainer,
              "Transfer Money",
              transAmount,
              getTime()
            );
            document.getElementById("all-transactions-container").innerHTML =
              document.getElementById("transaction-container").innerHTML;
          } else {
            alert("Insufficient Balance");
          }
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
