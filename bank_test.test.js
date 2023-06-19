const Account = require('./bank_test')

describe('Account', () => {
  it('should display an empty balance', () => {
    const response = new Account
    response.date = "Date";
    expect(response.printStatement()).toEqual([0, "Date", 0])
  });
  it('should deposit an amount into the array', () => {
    const response = new Account
    response.deposit(500)
    expect(response.printStatement()).toEqual(500)
  });
  it('should withdraw money from the balance', () => {
    const response = new Account
    response.deposit(1000)
    response.withdraw(500)
    expect(response.printStatement()).toEqual(500)
  });
});