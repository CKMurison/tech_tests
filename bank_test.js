class Transaction {
  constructor(date, amount){
    this.date = date;
    this.amount = amount;
  }
};

class Account {
constructor(balance, amount){
    this.balance = [];
    this.amount = amount;
  }

  deposit(amount) {
    this.balance.push(amount)
  };

  withdraw(amount) {
    this.balance
  }

  printStatement() {
    return this.balance
  }
};

module.exports = Account;