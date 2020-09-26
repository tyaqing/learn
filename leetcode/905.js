/**
 * 905. 按奇偶排序数组
 * @param {number[]} A
 * @return {number[]}
 */
// 	108 ms
// var sortArrayByParity = function(A) {
//     let odd = [];
//     let even = [];
//     for(let i = 0;i<A.length;i++){
//         if(A[i]%2===1) odd.push(A[i]);
//         else even.push(A[i])
//     }

//     return even.concat(odd);
// };

// 优化一下 108 ms
var sortArrayByParity = function (A) {
  let p1 = 0;
  let p2 = A.length - 1;
  while (p1 < p2) {
    // 如果左奇 右偶数
    if (A[p1] % 2 === 1 && A[p2] % 2 === 0) {
      [A[p1], A[p2]] = [A[p2], A[p1]];
    }
    // 如果 左边为奇数
    if (A[p2] % 2 === 1) p2--;
    if (A[p1] % 2 === 0) p1++;
    // p2--;p1++;
  }
  return A;
};
