const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//all credit transactions
const creditTransactions = transactions.filter(
  txn => txn.type === "credit"
);
console.log("Credit transactions:", creditTransactions);

//extract only transaction amounts
const transactionAmounts = transactions.map(txn => txn.amount);
console.log("Transaction amounts:", transactionAmounts);

//calculate final account balance
const finalBalance = transactions.reduce((balance, txn) => {
  if (txn.type === "credit") {
    return balance + txn.amount;
  } else {
    return balance - txn.amount;
  }
}, 0);
console.log("Final account balance:", finalBalance);

//first debit transaction
const firstDebit = transactions.find(txn => txn.type === "debit");
console.log("First debit transaction:", firstDebit);

//index of transaction with amount 10000
const indexOf10000 = transactions.findIndex(
  txn => txn.amount === 10000
);
console.log("Index of amount 10000:", indexOf10000);
