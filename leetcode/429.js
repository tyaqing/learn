/**
 * 429. N叉树的层序遍历
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
// 	120 ms
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (root === null) return res;
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let levelSize = stack.length;
    res.push([]);
    while (levelSize--) {
      let node = stack.shift();
      res[res.length - 1].push(node.val);
      if (node.children)
        node.children.forEach((item) => {
          stack.push(item);
        });
    }
  }
  return res;
};
