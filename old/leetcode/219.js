/**
 * 219. 存在重复元素 II
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const index = map.get(nums[i]);
      if (Math.abs(i - index) <= k) return true;
      //   map.set(nums[i],i)
    }
    map.set(nums[i], i);
  }
  return false;
};
