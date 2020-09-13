// import Index from "./decorator";
// import "./promise";
// import "./call&apply"; ok
// import "./bind";
// import "./new";
// import "./promise";
// import "./EventLoop";

// import "./prototype";
// import "./prototypeExtend";
// import "./borrowExtend";
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

new HD((resolve, reject) => {
  // reject("失败了");
  resolve("成功了");
})
  .then(
    (value) => {
      console.log(value);
      return "这传给下一个";
    },
    (reason) => {
      console.log(reason);
      return "这里又可以了";
    }
  )
  .then((value) => {
    console.log("这里爱没有执行");
    console.log(value);
  });

// console.log("hou");
