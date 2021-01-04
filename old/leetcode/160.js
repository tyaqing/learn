/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 160. 相交链表
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 清奇之标记法    116ms
// var getIntersectionNode = function(headA, headB) {
//     // 先遍历A链表，给A链表每个节点添加一个标记
//     while(headA){
//         headA.tag = true;
//         headA = headA.next;
//     }
//     // 再遍历B链表，check链表B上每个节点是否有标记，最终返回headB即可
//     while(headB){
//         if(headB.tag){
//             return headB
//         }
//         headB = headB.next;
//     }
//     return headB
// };

// 双指针技巧  112 ms
var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    // 判断是否到边界
    if (p1 === null) p1 = headB;
    else p1 = p1.next;
    if (p2 === null) p2 = headA;
    else p2 = p2.next;
  }
  // 循环后他们会共同走到null所以不需要处理null这种结果
  return p1;
};
