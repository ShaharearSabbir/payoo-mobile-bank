const transactionContainer = document.getElementById("transaction-container");
for (const transaction of allTransactions) {
  addTransactionDiv(transactionContainer, transaction.time, transaction.amount,transaction.time);
}
