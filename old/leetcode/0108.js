/**
 * 面试题 01.08. 零矩阵
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let leis = [];
  // 找雷
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) leis.push([j, i]);
    }
  }
  // console.log(leis)
  // 这里雷可以优化去重
  // let memo=[];
  // 横排扫雷
  for (const lei of leis) {
    matrix[lei[0]].fill(0);
  }
  // 竖排扫雷
  for (const lei of leis) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][lei[1]] = 0;
    }
  }
};
