/**
 * 35. 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 84ms
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // 与当前数字做比较，如果小于或等于就可以放在当前位置
    if (target <= nums[i]) return i;
    // else if(target)
  }
  // 遍历完后如果没有返回，说明数字比较大，需要放在最后一位
  return nums.length;
};
