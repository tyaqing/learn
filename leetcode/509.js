// 斐波那契数列

/**
 * 传统递归思想
 */

var fibA = function (N) {
  if (N <= 1) return N;
  return fibA(N - 1) + fibA(N - 2);
};
