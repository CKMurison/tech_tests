const Account = require('./bank_test')

describe('Account', () => {
  it('should display an empty balance', () => {
    const response = new Account();;
    expect(response).toEqual({"balance": 0, "transaction": []})
  });
  it('should deposit an amount into the array', () => {
    const response = new Account();
    response.deposit(500, '10/01/2023' )
    expect(response).toEqual({"balance": 500, "transaction": [["10/01/2023", '500.00', '', '500.00']]})
  });
  it('should withdraw money from the balance', () => {
    const response = new Account();
    response.balance = 3000
    response.withdraw(500, '14/01/2023')
    expect(response).toEqual({"balance": 2500, "transaction": [["14/01/2023", '', '500.00', '2500.00']]})
  });
});