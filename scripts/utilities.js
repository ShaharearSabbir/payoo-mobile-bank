function getInputValueById(id) {
  let value = document.getElementById(id).value;
  value = parseFloat(value);
  return value;
}

function getInnerHTMLByID(id) {
  let value = document.getElementById(id).innerText;
  return value;
}

function checkNumber(number) {
  if (typeof number !== NaN) {
    if (String(number).length === 10) {
      return true;
    }
  }
}

function checkPin(pin) {
  if (pin === 1234) {
    return true;
  }
}

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const time = hour + ":" + min;
  return time;
}

function displayProperty(id, value) {
  document.getElementById(id).style.display = value;
}

function addTransactionDiv(container, transactionType, amount, time) {
  const div = document.createElement("div");
  div.innerHTML = `
<div
  class="flex justify-between items-center px-5 py-2 bg-white rounded-2xl gap-3"
>
  <div>
    <img
      class="p-3 bg-slate-200 rounded-full"
      src="assets/wallet1.png"
      alt=""
    />
  </div>
  <div class="flex flex-1 justify-between items-center">
    <div>
      <h1 class="text-lg font-bold">${transactionType}</h1>
      <p class="opacity-80">Time: ${time}</p>
      <p>Amount: $${amount}</p>
    </div>
    <div class="text-xl">
      <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
    </div>
  </div>
</div>
`;
  container.appendChild(div);
}
