const Account = require('./bank_test')

describe('Account', () => {
  it('should display an empty balance', () => {
    const response = new Account
    expect(response.printStatement()).toEqual(0)
  });
});