class Account {
constructor(balance, amount, date, transaction){
    this.balance = 0;
    this.amount = amount;
    this.date = new Date();
    this.transaction = [];
  }

  deposit(amount) {
    const deposit = this.balance += amount;
    this.transaction.push(deposit, this.date, this.balance)
    console.log(this.transaction)
  };

  withdraw(amount) {
    this.balance -= amount;
  }

  printStatement() {
    return this.balance
  }
};

module.exports = Account;