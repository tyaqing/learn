/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // 方法1.可以通过排序

  // 方法2.
  // 如果进来的数组是空的，那就返回空数组
  if (strs.length === 0) return [];
  const map = new Map();
  for (const str of strs) {
    let characters = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      // characters.
      const ascii = str[i].charCodeAt() - 97;
      characters[ascii]++;
    }
    const key = characters.join(",");
    if (map.has(key)) {
      map.set(key, [...map.get(key), str]);
    } else {
      map.set(key, [str]);
    }
  }

  const res = [];
  for (const arr of map.values()) {
    res.push(arr);
  }

  return res;
};
