/**
 * json操作方式
 */

const obj = {
  name: "bob",
  age: 123,
};

let res = JSON.stringify(obj); //将数组/json转换成字符串
let result = JSON.parse(res); // 将json字符串转换成数组
console.log(res, result);
