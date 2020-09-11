/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 如果数组为空，直接返回空
  if (matrix.length === 0) return [];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let direction = "right";
  let res = [];

  while (left <= right && top <= bottom) {
    // right
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }
      top++;
      direction = "down";
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "up";
    } else if (direction === "up") {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }
  return res;
};
