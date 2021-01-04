/**
 * 62. 不同路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let arr = [];
  for (let i = 0; i < n; i++) arr.push([]);

  // arr[0][0] =arr[1][0]= 1;
  // console.log(arr)
  for (let i = 0; i < m; i++) arr[0][i] = 1;
  for (let i = 0; i < n; i++) arr[i][0] = 1;
  for (let j = 1; j < n; j++) {
    for (let i = 1; i < m; i++) {
      console.log(j, i);
      arr[j][i] = arr[j][i - 1] + arr[j - 1][i];
    }
  }
  return arr[n - 1][m - 1];
};
