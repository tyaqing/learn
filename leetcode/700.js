/**
 * 700. 二叉搜索树中的搜索
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 	112 ms
var searchBST = function (root, val) {
  function dfs(node) {
    if (node === null) return null;
    if (node.val === val) return node;
    if (node.val > val) return dfs(node.left);
    else return dfs(node.right);
  }
  return dfs(root);
};
