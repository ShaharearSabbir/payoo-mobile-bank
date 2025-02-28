const transactionContainer = document.getElementById("transaction-container");
for (const transaction of allTransactions) {
  addTransactionDiv(
    transactionContainer,
    transaction.type,
    transaction.amount,
    transaction.time
  );
}
