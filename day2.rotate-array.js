/**
 * 189. 旋转数组
 * https://leetcode-cn.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    while (k--) {
        let p = nums.pop();
        nums.unshift(p);
    }
    return nums;
};

let a = rotate([-1, -100, 3, 99], 2);
console.log(a)