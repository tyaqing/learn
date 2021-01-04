/**
 * 680. 验证回文字符串 Ⅱ
 * @param {string} s
 * @return {boolean}
 */
// 100 ms
var validPalindrome = function (s) {
  let p1 = 0;
  let p2 = s.length - 1;
  function help(p1, p2) {
    while (p1 <= p2) {
      if (s[p1] === s[p2]) {
        p1++;
        p2--;
      } else {
        return false;
      }
    }
    return true;
  }
  while (p1 <= p2) {
    if (s[p1] === s[p2]) {
      p1++;
      p2--;
    } else {
      return help(p1 + 1, p2) || help(p1, p2 - 1);
    }
  }
  return true;
};
