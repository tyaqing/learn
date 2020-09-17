/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    // console.log(mid)
    if (nums[mid] === target) return mid;
    // 判断有序无序
    if (nums[mid] >= nums[left]) {
      // 说明了左边有序
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 到这里说明右边有序
      // 如果目标在里面
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
