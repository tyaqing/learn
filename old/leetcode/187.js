/**
 * 187. 重复的DNA序列
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const map = new Map();
  let result = [];
  for (let i = 0; i + 10 <= s.length; i++) {
    const str = s.substring(i, i + 10);
    // console.log(str)
    if (map.get(str) === undefined) {
      map.set(str, 1);
    } else if (map.get(str) === 1) {
      map.set(str, 2);
      result.push(str);
    }
  }
  return result;
};
