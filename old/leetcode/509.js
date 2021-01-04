/**
 * @param {number} N
 * @return {number}
 */

// 传统递归思想 30的时间为100ms
// var fib = function(N) {
//    if (N <= 1) return N;
//    return fib(N - 1) + fib(N - 2);
// };

// 增加memoize后的递归思想  30的时间为80ms
// up-bottom
// var fib = function(N) {
//     if(N<=1) return N;
//    let cache = [0,1];
//    // 递归函数
//    function memoize(number){
//        if(cache[number]!==undefined)  return cache[number] ;
//        // 这里会暂存之前的数据
//        cache[number] = memoize(number-1)+memoize(number-2);
//        return cache[number];
//    }
//    return memoize(N);
// };

// bottom-up
// 需要的时候才去缓存
// 可以优化
// var fib = function(N) {
//     if(N<=1) return N;
//    let cache = [0,1];
//    // 递归函数
//    for(let i = 2;i<=N;i++){
//        cache[i] = cache[i-1]+cache[i-2];
//    }
//    return cache[N];

// };

// bottom-up 空间复杂度优化版

var fib = function (N) {
  if (N <= 1) return N;
  let prev1 = 0;
  let prev2 = 1;
  let result = 0;
  // 递归函数
  for (let i = 2; i <= N; i++) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }
  return result;
};
