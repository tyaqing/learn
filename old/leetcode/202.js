/**
 * 202. 快乐数
 * @param {number} n
 * @return {boolean}
 */
// 84 ms
var isHappy = function (n) {
  let map = new Set();
  while (n != 1) {
    if (map.has(n)) return false;
    map.add(n);
    // console.log(String(n).split('').reduce((a,b)=>a+Number(b)))
    n = String(n)
      .split("")
      .reduce((a, b) => a + b ** 2, 0);
  }
  return true;
};
