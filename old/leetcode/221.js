/**
 * 221. 最大正方形
 * @param {character[][]} matrix
 * @return {number}
 */
//104ms
var maximalSquare = function (matrix) {
  if (matrix === null || matrix.length === 0) return 0;
  let dp = Array(matrix.length);
  let max = 0;
  // let row = matrix.length;
  // let col = matrix[0].length;

  for (let row = 0; row < matrix.length; row++) {
    dp[row] = Array(matrix[0].length).fill(0);
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === "1") {
        if (row === 0 || col === 0) {
          dp[row][col] = 1;
        } else {
          dp[row][col] =
            Math.min(dp[row - 1][col], dp[row][col - 1], dp[row - 1][col - 1]) +
            1;
        }
      }
      // console.log(dp[row][col])
      max = Math.max(max, dp[row][col]);
    }
  }
  return max * max;
};
