/**
 * 733. 图像渲染
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
//96 ms
var floodFill = function (image, sr, sc, newColor) {
  if (image[sr][sc] === newColor) return image;
  let temp = image[sr][sc];
  function dfs(row, col) {
    if (
      col < 0 ||
      col >= image[0].length ||
      row < 0 ||
      row >= image.length ||
      image[row][col] !== temp
    )
      return;
    // console.log('修改了',row,col)
    image[row][col] = newColor;
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  dfs(sr, sc);
  return image;
};
