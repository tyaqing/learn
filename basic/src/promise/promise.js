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
      console.log("status", this.status);
      if (typeof onRejected != "function") {
        onRejected = () => {};
      }
      if (typeof onFulfilled != "function") {
        onFulfilled = () => {};
      }

      if (this.status === HD.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            try {
              let result = onFulfilled(value);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          },
          onRejected: (reason) => {
            try {
              let result = onRejected(reason);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          },
        });
      }
      if (this.status === HD.FULFILLED) {
        setTimeout(() => {
          try {
            // 这里收到了return的值
            let result = onFulfilled(this.value);
            // console.log(result);
            // this.status = HD.FULFILLED;
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.status === HD.REJECTED) {
        // onRejected(this.value);
        setTimeout(() => {
          try {
            let result = onRejected(this.value);
            // 这里有个问题
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
    });
  }
}

// console.log(p);
