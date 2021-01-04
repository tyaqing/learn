const bankAccount = {
  balance: 2020,
  name: "Bob",
  get dollor() {
    console.log("计算了一次");
    return this.balance / 6.54;
  },
};

const bankAccountCache = {
  balance: null,
  dollor: null,
};

const wrappedBnakAccount = new Proxy(bankAccount, {
  get: function (obj, prop, value) {
    if (prop === "dollor") {
      if (bankAccount.balance !== bankAccountCache.balance) {
        bankAccountCache.balance = obj.balance;
        bankAccountCache.dollor = obj.dollor;
      }
    }
    return bankAccountCache.dollor;
  },
});

// wrappedBnakAccount.balance += 222;
// console.log(wrappedBnakAccount.balance,'res')
console.log(wrappedBnakAccount.dollor);
console.log(wrappedBnakAccount.dollor);
console.log(wrappedBnakAccount.dollor);
wrappedBnakAccount.balance = 3000;
console.log(wrappedBnakAccount.dollor);
console.log(wrappedBnakAccount.dollor);
wrappedBnakAccount.balance = 10000;
console.log(wrappedBnakAccount.dollor);
console.log(wrappedBnakAccount.dollor);