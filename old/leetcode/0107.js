/**
 * 面试题 01.07. 旋转矩阵
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length;
  // 循环层 length/2  i = 层的意思
  // 这里的限制就是往对角线走不能超过对角线中点
  for (let i = 0; i < len - 1 - i; i++) {
    // 这里的限制就是往上走不能超过第一个[0][0]
    for (let j = i; i < len - 1 - j; j++) {
      const temp = matrix[i][j];
      //四项一起翻转
      matrix[i][j] = matrix[len - 1 - j][i];
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
      matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i];
      matrix[j][len - 1 - i] = temp;
    }
  }
  // console.log(matrix)
};
