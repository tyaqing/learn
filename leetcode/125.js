/**
 * 125. 验证回文串
 * @param {string} s
 * @return {boolean}
 */

// 84ms
var isPalindrome = function (s) {
  //我们将空字符串定义为有效的回文串
  if (s.length === 0) return true;
  const res = s.toLocaleLowerCase().replace(/[\W_]/g, "");
  let p1 = 0,
    p2 = res.length - 1;

  while (p1 < p2) {
    if (res[p1] !== res[p2]) return false;
    p1++;
    p2--;
  }
  return true;
};
