class Account {
constructor(balance, amount, date, transaction){
    this.balance = 0;
    this.amount = amount;
    this.date = new Date();
    this.transaction = [];
  }

  deposit(amount) {
    const formattedDate = this.date.toLocaleDateString('en-GB');
    const deposit = this.balance += amount;
    this.transaction.push(deposit, formattedDate, this.balance)
    console.log(this.transaction)
  };

  withdraw(amount) {
    this.balance -= amount;
  }

  printStatement() {
    return this.transaction
  }
};

module.exports = Account;