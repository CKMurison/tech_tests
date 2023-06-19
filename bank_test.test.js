const Account = require('./bank_test')

describe('Account', () => {
  it('should display an empty balance', () => {
    const response = new Account();;
    expect(response.printStatement()).toEqual([])
  });
  it('should deposit an amount into the array', () => {
    const response = new Account();
    response.deposit(500, '10/01/2023' )
    expect(response.printStatement()).toEqual([['10/01/2023', 500, 500]])
  });
  it('should withdraw money from the balance', () => {
    const response = new Account();
    response.balance = 3000
    response.withdraw(500, '14/01/2023')
    expect(response.printStatement()).toEqual([['14/01/2023', 500, 2500]])
  });
});