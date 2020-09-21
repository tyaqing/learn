/**
 * 238. 除自身以外数组的乘积
 * @param {number[]} nums
 * @return {number[]}
 */
// 理解后做的 116 ms   优化后104ms
var productExceptSelf = function (nums) {
  let productLeft = 1;
  // let productRight = 1;
  let result = [];
  result[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    result[i] = nums[i] * result[i + 1];
  }
  // console.log(result)
  for (let i = 0; i < nums.length; i++) {
    productLeft = i <= 0 ? 1 : nums[i - 1] * productLeft;
    let rightSum = i >= nums.length - 1 ? 1 : result[i + 1];
    result[i] = productLeft * rightSum;
  }
  return result;
};
