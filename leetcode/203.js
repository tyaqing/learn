/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 这和是使用了双指针 92ms
// var removeElements = function(head, val) {
//     let dummy  = new ListNode();
//     dummy.next = head;
//     let p1  = dummy;
//     let p2 = head;
//     while(p2!==null){
//         if(p2.val === val){
//             p2 = p2.next;
//         }else{
//             p1.next = p2;
//             p1=p2;
//             p2=p2.next;
//         }
//     }
//     // 如果有重复，最后把p1 和p2链接一下
//     p1.next =p2;
//     return dummy.next;
// };

// 使用单指针试一下 100ms
var removeElements = function (head, val) {
  let dummy = new ListNode();
  dummy.next = head;
  let p = dummy;
  // 为什么是p.next
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return dummy.next;
};
