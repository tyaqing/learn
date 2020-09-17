// import Index from "./decorator";
// import "./promise";
// import "./call&apply"; ok
// import "./bind";
// import "./new";
// import "./promise";
// import "./EventLoop";

// import "./prototype";
// import "./prototypeExtend";
// import ". /borrowExtend";
// import "./ES6/decorator";

import HD from "./promise/promise";

// let p = new HD((resolve, reject) => {
//   // console.log(a);
//   setTimeout(() => {
//     // resolve("解决");
//     reject("拒绝");
//   }, 1000);
// }).then((value) => {
//   console.log("resolve", value);
// }).then();

// new HD((resolve, reject) => {
//   // reject("失败了");
//   resolve("成功了");
// })
//   .then((value) => {
//     return new HD((resolve, reject) => {
//       reject("promise里面的函数");
//     });
//   })
//   .then(
//     (value) => {
//       console.log("123", value);
//     },
//     (reason) => {
//       console.log("reason", reason);
//     }
//   );

// let a = {
//   name: "tom",
// };

// let c = 123;

// function change(obj) {
//   return (obj += 1);
// }

// let res = change(c);
// console.log(c, res);

// function F() {}

// Object.prototype.a = function () {
//   console.log("a()");
// };

// Function.prototype.b = function () {
//   console.log("b()");
// };

// var f = new F();

// f.a();
// // f.b();

// F.a();
// F.b();

// function a() {}

// console.log(a.prototype.constructor === a);

console.log(1 << 5);
