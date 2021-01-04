export default class HD {
  static PENDING = "pending";
  static REJECTED = "rejected";
  static FULFILLED = "resolved";
  constructor(executor) {
    this.status = HD.PENDING;
    this.value = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }

  resolve(value) {
    if (this.status === HD.PENDING) {
      this.value = value;
      this.status = HD.FULFILLED;
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onFulfilled(value);
        });
      }, 0);
    }
  }
  reject(reason) {
    if (this.status === HD.PENDING) {
      this.value = reason;
      this.status = HD.REJECTED;
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onRejected(reason);
        });
      }, 0);
    }
  }
  then(onFulfilled, onRejected) {
    // 这里的返回的promise的resolve是在下一个then中的resolve
    return new HD((resolve, reject) => {
      if (typeof onRejected != "function") {
        onRejected = () => this.value;
      }
      if (typeof onFulfilled != "function") {
        onFulfilled = () => this.value;
      }

      if (this.status === HD.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            this.parse(onFulfilled(value), resolve, reject);
          },
          onRejected: (reason) => {
            this.parse(onRejected(reason), resolve, reject);
          },
        });
      }
      if (this.status === HD.FULFILLED) {
        setTimeout(() => {
          this.parse(onFulfilled(this.value), resolve, reject);
        }, 0);
      }
      if (this.status === HD.REJECTED) {
        // onRejected(this.value);
        setTimeout(() => {
          this.parse(onRejected(this.value), resolve, reject);
        }, 0);
      }
    });
  }
  parse(result, resolve, reject) {
    try {
      if (result instanceof HD) {
        result.then(resolve, reject);
      } else {
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  }
}

// console.log(p);
