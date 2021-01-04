/**
 * 函数扩展内容
 */

const obj = { name: "Im King" };

function foo(value) {
  this.name = value;
  console.log(this);
}

// 传参是连续传参
foo.call(obj, "Monkey");
// 传参是数组传参
foo.apply(obj, ["Obk"]);
// console.log(obj);

// bind传参的方式和call一样,通常制定回调函数的this
var bar = foo.bind(obj);

bar("ddd");

// bind一般在回调中使用,用于绑定this的作用域
setTimeout(
  function () {
    console.log(this);
  }.bind(obj),
  100
);
