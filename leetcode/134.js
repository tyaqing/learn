/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 自己写的 100ms
// var canCompleteCircuit = function(gas, cost) {
//     // i为开始的地方
//     for(let i = 0;i<gas.length;i++){
//         let balance = 0;
//         let start = i;
//         // 循环length次
//         for(let j= 0;j<gas.length;j++){
//             //判断边界
//             if(start>gas.length-1){
//                 start =0;
//             }
//             balance = balance +  gas[start] - cost[start];
//             if(balance<0) {
//                 break;
//             }
//             start++;
//         }
//         if(balance>=0) return i;
//     }
//     return -1;
// };

// 别人的思路   76ms
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let currentGas = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas = totalGas - cost[i] + gas[i];
  }

  if (totalGas < 0) {
    return -1;
  }

  for (let i = 0; i < gas.length; i++) {
    currentGas = currentGas - cost[i] + gas[i];
    if (currentGas < 0) {
      currentGas = 0;
      start = i + 1;
    }
  }

  return start;
};
