/**
 * 200. 岛屿数量
 * @param {character[][]} grid
 * @return {number}
 */
// 这里还需要好好研究一下
var numIslands = function (grid) {
  let count = 0;
  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[0].length ||
      grid[row][col] === "0"
    ) {
      return;
    }
    grid[row][col] = "0";
    dfs(row + 1, col); // ↑
    dfs(row, col + 1); // →
    dfs(row - 1, col); // ↓
    dfs(row, col - 1); // ←
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(row, col);
      }
    }
  }
  return count;
};
