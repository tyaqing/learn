import "./index.less";
import axios from "axios";

function JSONP({ url, params, callbackKey, callback }) {
  // 在参数里制定 callback 的名字
  params = params || {};
  params[callbackKey] = "jsonpCallback";
  // 预留 callback
  window.jsonpCallback = callback;
  // 拼接参数字符串
  // 插入 DOM 元素
  const script = document.createElement("script");
  script.setAttribute("src", `${url}`);
  document.body.appendChild(script);
}

axios({
  url: "https://www.easy-mock.com/mock/5901e0117a878d73716dd641/example/ttt?aa",
  method: "post",
  headers: {
    "content-type": "application/json",
    "X-PINGOTHER": "diy",
    Cookie: "name=123",
  },
  withCredentials: true,
});

// axios({
//   url: "https://www.baidu.com",
//   method: "get",
// });
alert(a);
a();
var a = 3;
function a() {
  alert(10);
}
alert(a);
a = 6;
a();

// function Foo() {
//   this.getName = function () {
//     console.log(1);
//   };
//   return this;
// }

// Foo.getName = function () {
//   console.log(2);
// };

// Foo.prototype.getName = function () {
//   console.log(3);
// };

// Foo();
