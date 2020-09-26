import "./index.css";

let stt = "get-element-by-id";

// console.log(str);
let str = "+7(903)-123-45-67";

let regexp = /\d/g;

// console.log(
//   stt
//     .match(/\w+\b/g)
//     .map((item, index) => {
//       if (index === 0) return item;
//       item = item.slice(0, 1).toLocaleUpperCase() + item.slice(1);
//       return item;
//     })
//     .join("")
// );

var length = 10;

function fn() {
  return this.length + 1;
}

var obj = {
  length: 5,

  test1: function () {
    return fn();
  },
};

obj.test2 = fn;

//下面代码输出是什么

console.log(obj.test1());

console.log(fn() === obj.test2());
