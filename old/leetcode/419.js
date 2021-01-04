/**
 * 419. 甲板上的战舰
 * @param {character[][]} board
 * @return {number}
 */
// 88 ms
var countBattleships = function (board) {
  let count = 0;
  function scan(row, col) {
    // 判断边界
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] === "."
    )
      return;
    board[row][col] = ".";
    scan(row + 1, col);
    scan(row - 1, col);
    scan(row, col + 1);
    scan(row, col - 1);
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === "X") {
        count++;
        scan(row, col);
      }
    }
  }
  return count;
};
