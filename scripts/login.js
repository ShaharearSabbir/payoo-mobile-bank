document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = getInputValueById("login-number");
    const accountPin = getInputValueById("login-pin");
    if (checkNumber(accountNumber)) {
      if (checkPin(accountPin)) {
        window.location.href = "main.html";
      } else {
        alert("Wrong Pin");
      }
    } else {
      alert("Wrong Account");
    }
  });
