/**
 * 498. 对角线遍历
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix.length === 0) return [];
  // if(matrix.length===1) return matrix[0];
  let row = (col = 0);
  let rowEnd = matrix.length;
  let colEnd = matrix[0].length;
  let result = [];
  let up = true;
  // console.log(rowEnd,colEnd)
  while (1) {
    result.push(matrix[row][col]);
    //判断是否达到最终边界
    if (col === colEnd - 1 && row === rowEnd - 1) break;
    if (up) {
      if (row - 1 < 0 && col + 1 < colEnd) {
        // console.log('到达边界右移一位',[[row],[col]])
        col++;
        up = !up;
      } else if (col + 1 > colEnd - 1 && row + 1 < rowEnd) {
        //  console.log('到达边界下移一位',[[row],[col]])
        row++;
        up = !up;
      } else {
        //  console.log('正常往上走',[[row],[col]])
        col++;
        row--;
      }
    } else {
      // console.log('执行往下走',col-1<0,row+1,rowEnd)
      // 这里是往下走，只要判断左下的边界问题
      if (col - 1 < 0 && row + 1 < rowEnd) {
        //   console.log('到达边界下移一位',[[row],[col]])
        row++;
        up = !up;
      } else if (row + 1 > rowEnd - 1 && col + 1 < colEnd) {
        // console.log('到达边界右移一位',[[row],[col]])
        col++;
        up = !up;
      } else {
        // console.log('正常往下走',[[row],[col]],row+1,rowEnd,col+1<colEnd)
        col--;
        row++;
      }
    }
  }
  return result;
};
