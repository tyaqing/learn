/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let memo = [];
  memo[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    memo[i] = Math.max(nums[i] + memo[i - 1], nums[i]);
  }
  return Math.max(...memo);
};
