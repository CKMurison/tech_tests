Specification

Requirements

You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).
Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00



1. Maintain a list or array to store the transaction history, including the date, credit amount, debit amount, and balance after each transaction.

transaction = [];

2. Modify the deposit method to add a transaction record to the history, including the date, the deposited amount as credit, and the updated balance.

const deposit = this.balance += amount 
transaction.push(deposit, this.date, this.balance)


3. Modify the withdraw method to add a transaction record to the history, including the date, the withdrawn amount as debit, and the updated balance.

const withdraw = this.balance += amount 
transaction.push(withdraw, this.date, this.balance)

4. Implement the printStatement method to generate the statement using the transaction history. The statement should display the date, credit (if any), debit (if any), and balance for each transaction in a tabular format.

this.transaction.map


5. Consider formatting the amounts to a fixed number of decimal places and formatting the date in the desired format.