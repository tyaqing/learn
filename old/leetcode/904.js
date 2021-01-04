/**
 * 904. 水果成篮
 * @param {number[]} tree
 * @return {number}
 */
//	136 ms
var totalFruit = function (tree) {
  let map = new Map();
  let max = (j = 0);
  for (let i = 0; i < tree.length; i++) {
    map.set(tree[i], i);
    if (map.size > 2) {
      let minIndex = Infinity;
      for (const [, index] of map) {
        if (index < minIndex) {
          minIndex = index;
        }
      }
      map.delete(tree[minIndex]);
      j = minIndex + 1;
    }
    max = Math.max(max, i - j + 1);
  }
  return max;
};
