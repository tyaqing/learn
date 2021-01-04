/**
 * 590. N叉树的后序遍历
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * 112 ms
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const res = [];
  function dfs(node) {
    if (node === null) return;
    node.children.forEach(dfs);
    res.push(node.val);
  }
  dfs(root);
  return res;
};
