/**
 * 解构赋值
 */

// 解构对象
let obj = {
  name: "nhah",
  age: 21,
};

let { name: username } = obj;
console.log(username);

//函数参数解构

function fun({ name, age }) {
  console.log(name, age);
}
fun(obj);

// 解构数组
let arr = [1, 2, 3, 4, "abc"];
let [, a, b] = arr;
console.log(a, b);
