// 监听消息
onmessage = function (e) {
  console.log("监听到的消息为:" + e.data);
  // return f(e.data);
  postMessage(f(e.data));
};

// 发送消息

function f(n) {
  if (n < 2) return n;
  return f(n - 1) + f(n - 2);
}
