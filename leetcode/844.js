/**
 * 844. 比较含退格的字符串
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// 	88 ms
var backspaceCompare = function (S, T) {
  function help(STR) {
    let stack = [];
    let arr = STR.split("");
    let len = STR.length;
    while (len) {
      if (arr[len - 1] === "#") {
        stack.push("#");
        arr.splice(len - 1, 1);
        len--;
        continue;
      }
      if (stack.length) {
        stack.pop();
        arr.splice(len - 1, 1);
        len--;
        continue;
      }
      len--;
    }
    return arr.join("");
  }
  return help(S) === help(T);
};
