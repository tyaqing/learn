/**
 * 144. 二叉树的前序遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 这里使用了递归的方法 72ms
// var preorderTraversal = function(root) {
//     let result = [];
//     function preorder(node){
//         if(node===null) return ;
//         result.push(node.val)
//         preorder(node.left)
//         preorder(node.right)
//     }
//     preorder(root)
//     return result;
// };

//尝试一下迭代的方式 76 ms
var preorderTraversal = function (root) {
  let result = [];
  let stack = [];
  if (root) stack.push(root);
  while (stack.length) {
    root = stack.pop();
    result.push(root.val);
    root.right && stack.push(root.right);
    root.left && stack.push(root.left);
  }
  return result;
};
