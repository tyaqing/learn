/**
 * @param {number[]} nums
 * @return {boolean}
 */
// up-bottom 思想   运行时间2880ms
// var canJump = function(nums) {
//     let totalLength   = nums.length;
//     let memo = Array(totalLength).fill(0);
//     memo[totalLength-1] = 1;

//     function jump(position){
//         if(memo[position]===1) return true;
//         else if(memo[position]===-1) return false;

//         let maxJump = Math.min(totalLength-1,position+nums[position]);
//         for(let i =position+1;i<=maxJump;i++){
//             let jumpResult = jump(i);
//             if(jumpResult===true){
//                 memo[position]=1;
//                 return true;
//             }
//         }
//         memo[position]=-1;
//         return false;
//     }
//     return jump(0);
// };

// bottom-up   运行时间380ms
// var canJump = function(nums) {
//     let totalLength   = nums.length;
//     let memo = Array(totalLength).fill(0);
//     memo[totalLength-1] = 1;

//     for(let i = totalLength-2;i>=0;i--){
//         const maxJump = Math.min(totalLength-1,i+nums[i]);
//         for(let j = i+1;j<=maxJump;j++){
//             if(memo[j]===1){
//                 memo[i]=1;
//                 break;
//             }
//         }
//     }
//     return memo[0]===1?true:false;
// };

// 贪心算法   运行用时 88ms
var canJump = function (nums) {
  let totalLength = nums.length;
  let maxJump = totalLength - 1;

  for (let i = totalLength - 2; i >= 0; i--) {
    if (nums[i] + i >= maxJump) {
      maxJump = i;
    }
  }
  return maxJump === 0 ? true : false;
};
