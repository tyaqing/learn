/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 这个自己写的 80ms
// var reverseBetween = function(head, m, n) {
//     if(head.next===null) return head;
//     if(n-m===0) return head;
//     let p1= p2=startPoint = head;
//     // 首先找到首位的位置
//     for(let i =0;i<m-1;i++){
//         p2 = p2.next;
//     }
//     // 找到结束点，之后需要去链接起来
//     for(let i =0;i<n;i++){
//         p1 = p1.next;
//     }
//     for(let i = 0;i<m-2;i++){
//         startPoint = startPoint.next
//     }
//     for(let i = 0;i<=n-m;i++){
//         let temp = p2;
//         p2 = p2.next;
//         temp.next= p1;
//         p1 = temp
//     }
//     //
//     if(m>1){
//         startPoint.next = p1;
//     }else{
//         head = p1;
//     }
//     return head;
// };

//  76ms
var reverseBetween = function (head, m, n) {
  let prev = null;
  let curr = head;
  for (let i = 1; i < m; i++) {
    prev = curr;
    curr = curr.next;
  }

  let prev2 = prev;
  let curr2 = curr;

  for (let i = m; i <= n; i++) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  if (m > 1) {
    prev2.next = prev;
  } else {
    head = prev;
  }
  curr2.next = curr;
  return head;
};
