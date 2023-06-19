class Account {
constructor(balance, amount, date){
    this.balance = 0;
    this.amount = amount;
    this.date = new Date();
  }

  deposit(amount) {
    this.balance += amount
  };

  withdraw(amount) {
      this.balance -= amount;
  }

  printStatement() {
    return this.balance
  }
};

module.exports = Account;