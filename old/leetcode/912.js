/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 原生	108 ms
// var sortArray = function(nums) {
//     return nums.sort((a,b)=>a-b)
// };

// 冒泡排序 	5016 ms
// var sortArray = function(nums) {
//     if(nums.length<=1) return nums;
//     for(let i=nums.length-1;i>=0;i--){
//         for(let j=0;j<i;j++){
//             if(nums[j]>nums[j+1]){
//                 let temp = nums[j];
//                  [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//             }
//         }
//     }
//     return nums;
// };

// 选择排序  	6652 ms
// var sortArray = function(nums) {
//     if(nums.length<=1) return nums;
//     for(let i=0;i<nums.length-1;i++){
//         for(let j=i+1;j<nums.length;j++){
//           if(nums[i]>nums[j]) [nums[i],nums[j]] = [nums[j],nums[i]];
//         }
//     }
//     return nums;
// };

// 快速排序 144 ms
// var sortArray = function(arr) {
// 　　if (arr.length <= 1) { return arr; }
// 　　var pivotIndex = Math.floor(arr.length / 2);
// 　　var pivot = arr.splice(pivotIndex, 1)[0];
// 　　var left = [];
// 　　var right = [];
// 　　for (var i = 0; i < arr.length; i++){
// 　　　　if (arr[i] < pivot) {
// 　　　　　　left.push(arr[i]);
// 　　　　} else {
// 　　　　　　right.push(arr[i]);
// 　　　　}
// 　　}
// 　　return sortArray(left).concat([pivot], sortArray(right));
// };

// 自写快排
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  var pivotIndex = nums.length >> 1;
  var pivot = nums.splice(pivotIndex, 1)[0];
  let left = [],
    right = [];
  for (let i of nums) {
    if (i > pivot) right.push(i);
    else left.push(i);
  }
  return sortArray(left).concat([pivot], sortArray(right));
};
