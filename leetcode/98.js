/**
 * 98. 验证二叉搜索树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 自己做的92 但是内存用的多
// var isValidBST = function(root) {
//     let arr = []
//     function dfs(node){
//         if(node ===null) return;
//         dfs(node.left);
//         arr.push(node.val);
//         dfs(node.right);
//     }
//     dfs(root)
//     for(let i =0;i<arr.length-1;i++){
//         if(arr[i+1]<=arr[i]) return false;
//     }
//     return true;
// };
// 	96 ms
var isValidBST = function (root) {
  function dfs(node, lower, upper) {
    if (node === null) return true;
    // 左边要小于最大的限度，右边要大于最小的限度
    if (node.val <= lower || node.val >= upper) return false;
    // 左边必须在(lower,node.val)之间
    return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper);
  }
  return dfs(root, -Infinity, Infinity);
  // return true;
};
