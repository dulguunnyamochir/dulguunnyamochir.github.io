class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  getInterest() {
    return this._interest;
  }

  setInterest(interest) {
    this._interest = interest;
  }

  addInterest() {
    super.deposit((super.getBalance() * this.getInterest()) / 100);
  }

  toString() {
    return `SavingsAccount: ${super.getNumber()} balance:  ${super.getBalance()} interest: ${
      this._interest
    }`;
  }

  endOfMonth() {
    this.addInterest();
    return this.toString();
  }
}
