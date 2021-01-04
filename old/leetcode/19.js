/*
这一部分是自己写的
*/
// var removeNthFromEnd = function (head, n) {
//   // 首先可以获取长度
//   let target = head,
//     len = 0;
//   while (target.next) {
//     target = target.next;
//     len++;
//   }
//   len++;
//   let index = len - n;
//   target = head;
//   if (index === 0 && head.next === null) {
//     head = null;
//   } else if (index === 0) {
//     head = head.next;
//   } else {
//     // 可气的是，head居然有值，tmmd
//     index--;
//     while (index-- > 0) {
//       target = target.next;
//     }
//     target.next = target.next.next;
//   }
//   return head;
// };

// 这个使用了双快慢指针
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let n1 = dummy,
    n2 = dummy;

  for (let i = 0; i <= n; i++) {
    n2 = n2.next;
  }
  while (n2 !== null) {
    n1 = n1.next;
    n2 = n2.next;
  }
  n1.next = n1.next.next;
  return dummy.next;
};
