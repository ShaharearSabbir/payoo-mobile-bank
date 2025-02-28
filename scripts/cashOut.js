document
  .getElementById("out-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const outNumber = getInputValueById("out-number");
    const outPIN = getInputValueById("out-pin");
    const outAmount = getInputValueById("out-amount");
    const mainBalance = getInnerHTMLByID("main-balance");
    const convertedMainBalance = parseFloat(mainBalance);
    const sum = convertedMainBalance - outAmount;
    const transactionContainer = document.getElementById(
      "transaction-container"
    );
    if (checkNumber(outNumber)) {
      if (checkPin(outPIN)) {
        if (outAmount > 0) {
          if (parseFloat(mainBalance) > outAmount) {
            document.getElementById("main-balance").innerText = sum;
            addTransactionDiv(
              transactionContainer,
              "Cashout",
              outAmount,
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
