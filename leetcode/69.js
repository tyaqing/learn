/**
 * 69. x 的平方根
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 1,
    right = Math.floor(x / 2);
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    console.log(mid, left, right);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
