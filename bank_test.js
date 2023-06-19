class Account {
constructor(){
    this.balance = 0;
    this.transaction = [];
  }

  deposit(amount, date) {
    const updatedBalance = this.balance += amount;
    this.transaction.push([date, amount, updatedBalance])
    console.log(this.transaction)
  };

  withdraw(amount, date) {
    const updatedBalance = this.balance -= amount;
    this.transaction.push([date, amount, updatedBalance])
    console.log(this.transaction)
  };

  printStatement() {
    return this.transaction
  };
};

module.exports = Account;