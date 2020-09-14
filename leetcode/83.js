/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 这个自己写的  88ms
// var deleteDuplicates = function(head) {
//     let curr = head;
//     // 特殊判断
//     if(head===null) return head;
//     while(curr.next!==null){
//         let checkPoint = curr.next;
//         // console.log(checkPoint.val,curr.val)
//         while(checkPoint!=null&&checkPoint.val===curr.val){
//             checkPoint = checkPoint.next;
//         }
//         curr.next = checkPoint
//         // 判断尾节点
//         if(curr.next===null){
//             curr.next = null;
//         }else{
//              curr = curr.next;
//         }
//     }
//     return head;
// };

// 还是这个方法妙。直接去跳curren的next  96ms
var deleteDuplicates = function (head) {
  let current = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};
