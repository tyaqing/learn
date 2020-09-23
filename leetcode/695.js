/**
 * 695. 岛屿的最大面积
 * @param {number[][]} grid
 * @return {number}
 */
// 108ms
var maxAreaOfIsland = function (grid) {
  // let result = 0;
  let max = 0;
  function dfs(row, col) {
    //   console.log('dfs',row,col)
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === 0
    )
      return 0;
    grid[row][col] = 0;
    let count = 1;

    count += dfs(row + 1, col);
    count += dfs(row - 1, col);
    count += dfs(row, col + 1);
    count += dfs(row, col - 1);
    return count;
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        max = Math.max(dfs(row, col), max);
      }
    }
  }
  return max;
};
