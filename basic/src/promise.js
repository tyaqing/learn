/* 跟 thenable 对象 */
var thenable = {
  then: function (resolve, reject) {
    resolve({ a: 123 });
  },
};

const result = Promise.resolve(thenable);
// Promise {state: "resolved", data: 1, callbackQueue: Array(0)}

console.log(result);
