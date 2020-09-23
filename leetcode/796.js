/**
 * 796. 旋转字符串
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
//	96 ms
var rotateString = function (A, B) {
  if (A.length !== B.length) return false;
  A = A + A;
  // console.log(A)
  return A.includes(B);
};
