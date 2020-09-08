/**
 * 1. 两数之和
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 自己做的
  // let l = 0,
  //   r = 1;
  // while (l < nums.length) {
  //   while (r < nums.length) {
  //     let sum = nums[l] + nums[r];
  //     if (sum === target) {
  //       console.log();
  //       return [l, r];
  //     }
  //     r++;
  //   }
  //   l++;
  //   r = l + 1;
  // }
  // return false;

  // 另一种作差思路
  let map = {}; //key数字 value下标
  let loop = 0; //循环次数
  let dis; //目标与当前值的差
  while (loop < nums.length) {
    dis = target - nums[loop];
    if (map[dis] != undefined) {
      return [loop, map[dis]];
    }
    map[nums[loop]] = loop;
    loop++;
  }
  return;
};

let result = twoSum([2, 7, 11, 15], 17);
console.log(result);
