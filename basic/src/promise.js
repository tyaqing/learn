let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //使用定时器来模拟异步
    resolve(100);
  }, 1000);
});
p.then(function (data) {
  console.log(data);
});
