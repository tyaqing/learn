/**
 * 589. N叉树的前序遍历
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 	144 ms
var preorder = function (root) {
  // console.log(root.children)
  const res = [];
  function dfs(node) {
    if (node === null) return;
    res.push(node.val);
    node.children.forEach(function (item) {
      dfs(item);
    });
  }
  dfs(root);
  return res;
};
