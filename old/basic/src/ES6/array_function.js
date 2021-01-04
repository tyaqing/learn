/**
 * array_function.js
 * 箭头函数
 */

//没有形参的时候
// let func = () => console.log(123);

// 只有一个形参
// let func1 = (name) => {
//   console.log(123);
// };

/**
 * 特点
 * 1.箭头函数的this不是在调用时决定的,而是在定义时所处的对象
 */

// let btn = document.getElementById("btn");
// function bb() {
//   this.name = 123;
//   btn.onclick = () => {
//     console.log(this);
//     // 这里的this打印出来是window. 改函数所处的对象就是window
//     // 这是因为在定义的时候,改函数所处的对象是window.
//   };
// }
// bb();
// console.log(this.name);

// let cc = () => {
//   this.name = "123";
//   btn.onclick = () => {
//     console.log(this);
//     // 这里的this打印出来是cc的函数对象.
//   };
// };

// cc();
this.name = "window";
let obj = {
  name: "bob",
  getName: () => {
    btn.onclick = () => {
      console.log(this);
      // 这里的this打印出来是obj.
    };
  },
};

obj.getName();
