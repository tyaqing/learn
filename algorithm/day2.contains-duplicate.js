/**
 * 217. 存在重复元素
 * https://leetcode-cn.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    // 传统指针思路
    // let l = 0, r = 1;
    // while (l < nums.length) {
    //     while (r < nums.length) {
    //         if (nums[l] === nums[r]) {
    //             return true;
    //         } else {
    //             r++;
    //         }
    //     }
    //     l++;
    //     r = l + 1;
    // }
    // return false;

    // 使用Set
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    if (set.size === nums.length) return false;
    else return true;

};


let result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(result);