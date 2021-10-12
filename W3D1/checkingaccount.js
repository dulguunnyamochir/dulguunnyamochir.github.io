class CheckingAccount extends Account {
  constructor(number, overdraftLimit) {
    super(number);
    this._overdraftLimit = overdraftLimit;
  }

  getOverdraftLimit() {
    return this._overdraftLimit;
  }

  setOverdraftLimit(overdraftLimit) {
    this._overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > super.getBalance() + this._overdraftLimit) {
      throw Error("Insufficient funds");
    }
    this._balance -= amount;
  }

  toString() {
    return `CheckingAccount: ${super.getNumber()} balance:  ${super.getBalance()} overdraftLimit: ${
      this._overdraftLimit
    }`;
  }

  endOfMonth() {
    return super.getBalance() < 0 ? "Warning, low balance" : "";
  }
}
