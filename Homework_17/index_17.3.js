class BankAccount {
  constructor(balance) {
    let userBalance = balance;

    this.deposit = function (dep) {
      userBalance = dep + userBalance;
    };

    this.withdraw = function (amount) {
      if (userBalance >= amount) {
        userBalance = userBalance - amount;
      } else {
        return "Недостатньо коштів";
      }
    };

    this.getBalance = function () {
      return userBalance;
    };
  }
}
const account1 = new BankAccount(1000);
console.log(account1.getBalance()); 

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());
