/**
 * 922. 按奇偶排序数组 II
 * @param {number[]} A
 * @return {number[]}
 */
// 	124 ms
var sortArrayByParityII = function (A) {
  let j = 1;
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2 === 1) {
      while (A[j] % 2 === 1 && j < A.length) {
        j += 2;
      }
      [A[j], A[i]] = [A[i], A[j]];
    }
  }
  return A;
};
