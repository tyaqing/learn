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
var swapPairs = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let p = dummy;
  // 这里判断下链表是不是空的
  // if(head===null) return head;

  while (p.next !== null && p.next.next !== null) {
    let n1 = p.next;
    let n2 = p.next.next;
    p.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    p = n1;
    if (p.next === null) break;
  }

  return dummy.next;
};
