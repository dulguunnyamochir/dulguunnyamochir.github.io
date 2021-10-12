class Bank {
  constructor() {
    this._accounts = [];
  }

  static nextNumber = 1;

  addAccount() {
    const acc = new Account(Bank.nextNumber);
    this._accounts.push(acc);
    Bank.nextNumber++;
    return acc.getNumber();
  }

  addSavingsAccount(interest) {
    const acc = new SavingsAccount(Bank.nextNumber, interest);
    this._accounts.push(acc);
    Bank.nextNumber++;
    return acc.getNumber();
  }

  addCheckingAccount(overdraft) {
    const acc = new CheckingAccount(Bank.nextNumber, overdraft);
    this._accounts.push(acc);
    Bank.nextNumber++;
    return acc.getNumber();
  }

  closeAccount(number) {
    const itemIndx = this._accounts.indexOf(
      this._accounts.find((e) => e.getNumber() == number)
    );
    this._accounts.splice(itemIndx, 1);
  }

  accountReport() {
    return this._accounts.map((account) => account.toString()).join(" ");
  }

  endOfMonth() {
    return this._accounts.map((account) => account.endOfMonth()).join(" ");
  }
}
