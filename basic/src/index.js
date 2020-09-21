import "./index.css";
/**
 * copy
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 9];

let arr2 = arr.slice(0, arr.length);
console.log(arr2);

let user = {
  name: "bob",
};

let user2 = {};
Object.assign(user2, user);
user2.name = "smith";

console.log(user, user2);

/**
 * Object.assign()  // 浅拷贝
 * Array.concat()   // 浅拷贝
 * Array.slice()    // 浅拷贝
 * JSON.parse(JSON.stringify())  // 深拷贝 但是里面不能有函数
 */

/**
  * 深克隆
    判断数据类型
    1. typeof  String Number Object Boolean Array Undefined Function
    2. Object.prototype.toString.call();
  */

let res = "123";
let result = Object.prototype.toString.call(res).slice(8, -1);

console.log(result);
