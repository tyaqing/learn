class HD {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(executor) {
    this.staus = HD.PENDING;
    this.value = null;
    executor(this.resolve, this.reject);
  }
  resolve(value) {
    console.log(this);
    this.staus = HD.FULFILLED;
    this.value = value;
  }
  reject(reason) {
    this.staus = HD.REJECTED;
    this.reason = reason;
  }
}

let p = new HD((resolve, reject) => {
  resolve(123);
});

console.log(p);
