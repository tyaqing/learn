/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  // 第一步对数组进行排序
  nums.sort((a, b) => a - b);
  // 开始循环索引index ，index只需要循环到前3位
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果i是首位，且当前i与前一个i相等就continue
    if (i === 0 || nums[i] !== nums[i - 1]) {
      // 每次循环创建start和end，用于遍历
      let start = i + 1,
        end = nums.length - 1;
      // 只要start>end就继续遍历
      while (start < end) {
        let count = nums[i] + nums[start] + nums[end];
        // 如果总数刚好等于0，那就推进arr
        if (count === 0) {
          result.push([nums[i], nums[start], nums[end]]);
          // 然后边界开始缩小
          start++;
          end--;
          // 边界缩小后需要判断一下上一个边界和现在的边界是否相同，如果相同继续跳进，否则会出现重复的数字
          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
        } else if (count > 0) {
          end--;
        } else {
          start++;
        }
      }
    }
  }
  return result;
};
