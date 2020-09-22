/**
 * 328. 奇偶链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 80ms
var oddEvenList = function (head) {
  if (head === null) return null;
  if (head.next === null) return head;

  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  //　这里用even判断是因为even走的比odd快
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
