/**
 * 3. 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let arr = [],
    max = 0;
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (-1 !== index) {
      arr.splice(0, index + 1);
    }
    arr.push(s[i]);
    max = Math.max(arr.length, max);
  }
  return max;
};

let result = lengthOfLongestSubstring("abcdee");
console.log(result);
