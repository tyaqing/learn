/**
 * 94. 二叉树的中序遍历
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 首先出场的是递归 76 ms
// var inorderTraversal = function(root) {
//     let result = [];
//     function inorder(node){
//         if(node===null) return ;
//         inorder(node.left);
//         result.push(node.val)
//         inorder(node.right)
//     }
//     inorder(root)
//     return result;
// };

// 迭代方法 88ms
var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  // if(root) stack.push(root);
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};
