/*
这一部分是自己写的
*/
var removeNthFromEnd = function (head, n) {
  // 首先可以获取长度
  let target = head,
    len = 0;
  while (target.next) {
    target = target.next;
    len++;
  }
  len++;
  let index = len - n;
  target = head;
  if (index === 0 && head.next === null) {
    head = null;
  } else if (index === 0) {
    head = head.next;
  } else {
    // 可气的是，head居然有值，tmmd
    index--;
    while (index-- > 0) {
      target = target.next;
    }
    target.next = target.next.next;
  }
  return head;
};
