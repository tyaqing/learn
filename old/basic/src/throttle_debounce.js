function sayHi() {
  console.log("开始搜索:" + this.value);
}

let input = document.getElementById("input");
input.addEventListener("input", throttle(sayHi, 1000)); // 防抖

function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

// 利用时间戳
function throttle(func, frequence = 1000) {
  let timer = Date.now() + frequence;
  return function () {
    if (Date.now() < timer) return;
    func.apply(this, arguments);
    timer = Date.now() + frequence;
  };
}
// 利用定时器
function throttle2(func, frequence = 1000) {
  let timeout = null;
  return function () {
    if (timeout) return;
    timeout = setTimeout(() => {
      func.apply(this, arguments);
      timeout = null;
    }, frequence);
  };
}
