/**
 * 102. 二叉树的层序遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 	104 ms
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (root === null) return [];
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let levelSize = stack.length; //确定该层的数量，即循环次数
    res.push([]);
    while (levelSize--) {
      node = stack.shift();
      res[res.length - 1].push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }
  return res;
};

// var levelOrder = function(root) {
//     const ret = [];
//     if (!root) {
//         return ret;
//     }

//     const q = [];
//     q.push(root);
//     while (q.length !== 0) {
//         const currentLevelSize = q.length;
//         ret.push([]);
//         for (let i = 1; i <= currentLevelSize; ++i) {
//             const node = q.shift();
//             ret[ret.length - 1].push(node.val);
//             if (node.left) q.push(node.left);
//             if (node.right) q.push(node.right);
//         }
//     }

//     return ret;
// };
