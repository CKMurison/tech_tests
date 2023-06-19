class Account {
constructor(balance, amount){
    this.balance = 0;
    this.amount = amount;
  }

  deposit(amount) {
    this.balance += amount
  };

  withdraw(amount) {
    this.balance -= amount
  }

  printStatement() {
    return this.balance
  }
};

module.exports = Account;