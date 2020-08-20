/**
 * 2. 两数相加
 * https://leetcode-cn.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 这里是非指针方式实现，属于非常垃圾的操作
// let arrToZ = function (arr) {
//   let loop = arr.length;
//   let sum = 0;
//   for (let i = 0; i < loop; i++) {
//     sum += arr[i] * Math.pow(10, i);
//   }
//   return sum;
// };

// let reverse = function (arr) {
//   console.log("22", arr.length);
//   let len = arr.length;

//   let loop = len % 2 ? (len - 1) / 2 : len / 2;
//   for (let i = 0, j = arr.length - 1; i < loop; i++, j--) {
//     let t = arr[i];
//     arr[i] = arr[j];
//     arr[j] = t;
//   }
//   return arr;
// };

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   console.log(l1.length);

//   l1 = reverse(l1);
//   //   return;
//   l2 = reverse(l2);
//   l1 = arrToZ(l1);
//   l2 = arrToZ(l2);
//   let sum = (l1 + l2).toString();
//   let r = [];
//   let s = sum.length;
//   while (s > 0) {
//     r.push(parseInt(sum[s - 1]));
//     s--;
//   }

//   return r;
// };
function ListNode(val) {
  this.val = val;
  this.next = null;

  this.append = function (val) {
    let n = new ListNode(val);
    let current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = n;
    // this.next = n;
  };
}

var addTwoNumbers = function (l1, l2) {
  let node = new ListNode("head");
  let temp = node; //哑结点
  let add = 0; //是否进一
  let sum = 0; //新链表当前未取余的值 = 链表1值 + 链表2值 + add;

  //遍历，直到最长的都为空
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    temp.next = new ListNode(sum % 10); //取余则为新链表的值
    temp = temp.next;
    add = sum >= 10 ? 1 : 0;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  add && (temp.next = new ListNode(add));
  return node.next;
};

let genNode = function (arr) {
  let n = new ListNode("head");
  for (let i = 0; i < arr.length; i++) {
    n.append(arr[i]);
  }

  return n;
};
let result = addTwoNumbers(genNode([2, 4, 3, 4]), genNode([5, 6, 4, 2]));
console.log(result.next);
