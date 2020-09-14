/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 206.反转链表
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let p1 = null,
    p2 = head;
  while (p2) {
    let tep = p2;
    p2 = p2.next;
    tep.next = p1;
    p1 = tep;
  }
  return p1;
};
