/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 如果字符串的长度小于2，也就是一个字符，就直接返回这个字符    需要注意的是，2个相同的字符也是回文
  if (s.length < 2) return s;
  let start = 0,
    maxLength = 1;

  function helper(left, right) {
    // 这里主要是判断边界 以及 判断2边的字符是否形成回文
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      // 如果形成了回文，而且回文的长度大于之前所记录的长度，那么就记录这次长度为最大长度
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      // 继续遍历左右两边的字符
      left--;
      right++;
    }
  }
  // 遍历出发点
  for (let i = 0; i < s.length; i++) {
    helper(i - 1, i); // 这个是判断abba这种形式的
    helper(i - 1, i + 1); // 这种是判断  abcba 这种形式的
  }
  // 遍历完成后，使用start 和maxLength取得最长的字符串
  return s.substring(start, start + maxLength);
};
