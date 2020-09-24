/**
 * 173. 二叉搜索树迭代器
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 164 ms
// class BSTIterator{
//     constructor(root){
//         let s = [];
//         function dfs(node){
//             if(node===null)return;
//             dfs(node.left);
//             s.push(node.val);
//             dfs(node.right);
//         }
//         dfs.call(this,root);
//     this.stack = s;
//     }
//     next(){
//         return this.stack.shift();
//     }
//     hasNext(){
//          return this.stack.length===0?false:true;
//     }
// }
class BSTIterator {
  constructor(root) {
    const stack = [];
    function* gen(node) {
      while (node || stack.length) {
        while (node) {
          stack.push(node);
          node = node.left;
        }
        node = stack.pop();
        yield node.val;
        node = node.right;
      }
      return;
    }
    this.gen = gen(root);
    this.curr = this.gen.next();
    // this.curr = g.next();
    // console.log(gen().next())
  }
  next() {
    const value = this.curr.value;
    this.curr = this.gen.next();
    return value;
  }
  hasNext() {
    return !this.curr.done;
  }
}
