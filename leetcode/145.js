/**
 * 145. 二叉树的后序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
// 首先还得递归 80 ms
// var postorderTraversal = function(root) {
//      let result = [];
//     function inorder(node){
//         if(node===null) return ;
//         inorder(node.left);
//         inorder(node.right)
//          result.push(node.val)
//     }
//     inorder(root)
//     return result;
// };

// 尝试迭代 68 ms
var postorderTraversal = function (root) {
  let result = [];
  let stack = [];
  if (root) stack.push(root);
  while (stack.length > 0) {
    const nood = stack.pop();
    result.unshift(nood.val);
    if (nood.left !== null) stack.push(nood.left);
    if (nood.right !== null) stack.push(nood.right);
  }
  return result;
};
