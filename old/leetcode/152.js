/**
 * 152. 乘积最大子数组
 * @param {number[]} nums
 * @return {number}
 */
// 92ms
var maxProduct = function (nums) {
  let minProductMemo = [nums[0]];
  let maxProductMemo = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    minProductMemo[i] = Math.min(
      nums[i],
      nums[i] * minProductMemo[i - 1],
      nums[i] * maxProductMemo[i - 1]
    );
    maxProductMemo[i] = Math.max(
      nums[i],
      nums[i] * minProductMemo[i - 1],
      nums[i] * maxProductMemo[i - 1]
    );
  }
  // console.log(maxProductMemo)
  return Math.max(...maxProductMemo);
};
