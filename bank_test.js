class Account {
constructor(){
    this.balance = 0;
    this.transaction = [];
  }

  deposit(amount, date) {
    this.balance += amount;
    this.transaction.push([date, amount.toFixed(2), '', this.balance.toFixed(2)])
  };

  withdraw(amount, date) {
    this.balance -= amount;
    this.transaction.push([date, '', amount.toFixed(2), this.balance.toFixed(2)])
  };

  printStatement() {
    console.log('date || credit || debit || balance')
     this.transaction.reverse().forEach((transaction) => {
      const [date, credit, debit, balance] = transaction;
      console.log(`${date} || ${credit} || ${debit} || ${balance}`)
    });
  }
};

const account = new Account();
account.deposit(1000, '10/01/2023');
account.deposit(2000, '13/01/2023');
account.withdraw(500, '14/01/2023');

account.printStatement();

module.exports = Account;