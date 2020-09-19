// var findDiagonalOrder = function (matrix) {
//   let row = (col = 0);
//   let top = (left = 0);
//   const right = matrix[0].length;
//   const bottom = matrix.length;
//   let result = [matrix[0]];
//   let derection = "right";
//   while (1) {
//     //首先右上走
//     if (row - 1 < top) {
//       row += 1;
//       derection = "left";
//     }

//     result.push(matrix[row][col]);
//     console.log(col, row);
//     return 1;
//   }
//   console.log(matrix);
// };

// findDiagonalOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ]);

function f(n) {
  if (n < 2) return n;
  return f(n - 1) + f(n - 2);
}
let now = Date.now();

let worker = new Worker("./src/worker.js");

// console.log(f(40));
console.log(Date.now() - now);
