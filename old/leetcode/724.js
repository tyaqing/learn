/**
 * 724. 寻找数组的中心索引
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // if(nums.length===1) return 0;
  // if(nums.length===2) return -1;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  // console.log('sum',sum)
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
    if (sum === leftSum) return i;
    leftSum += nums[i];
  }
  return -1;
};
