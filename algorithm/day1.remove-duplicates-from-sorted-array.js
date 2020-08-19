let removeDuplicates = function (nums) {
    // 首先设定快慢指针 l慢指针  r快指针
    let l = 0, r = 0;
    // 循环
    for (l = 0, r = 1; r < nums.length; r++) {
        // 如果左右不相等
        if (nums[l] !== nums[r]) {
            // 就调换快慢指针的值
            nums[l + 1] = nums[r];
            l++;
        }
    }
    return l + 1;
};
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

let a = removeDuplicates(arr)
console.log(arr)