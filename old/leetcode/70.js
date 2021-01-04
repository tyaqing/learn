/**
 * 70. 爬楼梯
 */

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  const arr = [];
  function f(n) {
    if (n <= 2) {
      return n;
    }
    //先判断有没计算过
    if (arr[n] !== undefined) {
      //计算过，直接返回
      return arr[n];
    } else {
      // 没有计算过，递归计算,并且把结果保存到 arr数组里
      //  console.log('???')
      arr[n] = f(n - 1) + f(n - 2);
      return arr[n];
    }
  }
  return f(n);
  // console.log(arr)
};
