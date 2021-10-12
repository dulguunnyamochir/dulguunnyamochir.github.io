describe("Account tests", () => {
  it("Checking constructor and getNumber()", () => {
    let acc = new Account(99);
    assert.strictEqual(99, acc.getNumber());
  });

  it("Checking getBalance()", () => {
    let acc = new Account(99);
    assert.strictEqual(0, acc.getBalance());
  });

  it("Checking deposit() and withdraw()", () => {
    let acc = new Account(99);
    acc.deposit(10);
    acc.deposit(20);
    acc.withdraw(10);
    acc.deposit(5);
    assert.strictEqual(25, acc.getBalance());
  });

  describe("SavingsAccount", () => {
    it("Checking setter and getter methods of Interest", () => {
      let acc = new SavingsAccount(100, 5.5);
      acc.setInterest(7);
      assert.strictEqual(7, acc.getInterest());
    });

    it("Checking addInterest()", () => {
      let acc = new SavingsAccount(230, 2);
      acc.deposit(200);
      acc.addInterest();
      assert.strictEqual(204, acc.getBalance());
    });

    it("Checking endOfMonth()", () => {
      let acc = new SavingsAccount(150, 10);
      acc.deposit(100);
      assert.strictEqual(
        "SavingsAccount: 150 balance:  110 interest: 10",
        acc.endOfMonth()
      );
    });
  });

  describe("CheckingAccount", () => {
    it("Checking getter and setter methods of over draft limit", () => {
      let acc = new CheckingAccount(100, 240);
      acc.setOverdraftLimit(123);
      assert.strictEqual(123, acc.getOverdraftLimit());
    });

    it("Checking withdraw()", () => {
      let acc = new CheckingAccount(100, 21);
      acc.withdraw(3);
      acc.deposit(11);

      assert.strictEqual(8, acc.getBalance());
    });

    it("Checking endOfMonth()", () => {
      assert.strictEqual("", new CheckingAccount(100, 13).endOfMonth());
    });
  });

  describe("Bank", () => {
    it("Checking addAccount()", () => {
      let bank = new Bank();
      bank.addAccount();
      assert.strictEqual(new Account(1).toString(), bank.accountReport());
    });

    it("Checking addSavingsAccount()", () => {
      let bank = new Bank();
      bank.addSavingsAccount(1);
      assert.strictEqual(
        new SavingsAccount(2, 1).toString(),
        bank.accountReport().split("\n")[0]
      );
    });

    it("Checking addCheckingAccount()", () => {
      let bank = new Bank();
      bank.addCheckingAccount(1);
      assert.strictEqual(
        new CheckingAccount(3, 1).toString(),
        bank.accountReport().split("\n")[0]
      );
    });

    it("Checking closeAccount()", () => {
      let bank = new Bank();
      bank.addAccount();
      bank.closeAccount(1);
      bank.closeAccount(1);
      bank.closeAccount(1);
      assert.strictEqual(undefined, bank.accountReport().split("\n")[3]);
    });

    it("Checking accountReport()", () => {
      let bank = new Bank();
      bank.addAccount(1);
      bank.addSavingsAccount(3);
      bank.addCheckingAccount(4);

      assert.strictEqual(
        [new Account(5), new SavingsAccount(6, 3), new CheckingAccount(7, 4)]
          .map((item) => item.toString())
          .join(" "),
        bank.accountReport()
      );
    });
  });
});

// Account 5: balance 0 SavingsAccount: 6 balance:  0 interest: 0 CheckingAccount: 7 balance:  0 overdraftLimit: 4
// Account 5: balance 0 SavingsAccount: 6 balance:  0 interest: 3 CheckingAccount: 7 balance:  0 overdraftLimit: 4
