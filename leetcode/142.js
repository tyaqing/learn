/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 142. 环形链表 II
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null || head.next === null) return null;
  let slow = head.next;
  let fast = head.next.next;
  while (fast && fast.next) {
    if (slow === fast) {
      let p = head;
      while (p !== slow) {
        p = p.next;
        slow = slow.next;
      }
      return p;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return null;
};
