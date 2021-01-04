/**
 * 136. 只出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */
// 自己写的 100ms
// var singleNumber = function(nums) {
//     let set= new Set();
//     for(const i of nums){
//         if(set.has(i)){
//             set.delete(i)
//         }else{
//             set.add(i);
//         }
//     }
//     for(const i of set){
//        return i;
//     }
// };

// 亦或法 80ms
var singleNumber = function (nums) {
  let ans = 0;
  for (const num of nums) {
    // console.log(ans)
    ans ^= num;
  }
  return ans;
};
