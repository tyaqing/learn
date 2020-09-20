/**
 * symbol
 */

let symbol = Symbol();

let obj = {
  name: "bob",
  age: 123,
};

obj[symbol] = "男";

console.log(symbol, obj);

let symbol1 = Symbol("unique");

// 可以定义常量
// Symbol 生成一个全局唯一的值。
