/**
 * 153. 寻找旋转排序数组中的最小值
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0,
    right = nums.length - 1;
  if (nums[left] < nums[right]) return nums[0];

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    console.log(mid);
    if (nums[mid] < nums[mid - 1]) return nums[mid];
    if (nums[mid + 1] < nums[mid]) return nums[mid + 1];

    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
