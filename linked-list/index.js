/**
 * 设计链表
 */
// 创造一个节点
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    // 生成一个哑结点
    this.head = new ListNode("head");
    this.end = this.head;
    this.len = 0;
  }
  get(index) {
    if (index >= this.len || index < 0) {
      return -1;
    } else if (index === this.len - 1) {
      return this.end.val;
    } else {
      let target = this.head.next;
      while (index-- > 0) {
        target = target.next;
      }
      return target.val;
    }
  }
  // 打印所有结点
  print() {
    let res = [];
    let node = this.head.next;
    while (node) {
      res.push(node.val);
      node = node.next;
    }
    console.log(res);
  }
  // 往链表开头加入结点
  addAtHead(val) {
    // console.log(this.head);
    let target = new ListNode(val, this.head.next);
    this.head.next = target;
    if (this.len === 0) this.end = target;
    this.len++;
  }
  //追加到链表的最后一个元素
  addAtTail(val) {
    let target = new ListNode(val, null);
    this.end.next = target;
    this.end = target;
    this.len++;
  }
  // 这里的index索引先提个问号
  addAtIndex(index, val) {
    if (index <= 0) {
      this.addAtHead(val);
    } else if (index === this.len) {
      this.addAtTail(val);
    } else if (index < this.len) {
      let target = this.head;
      // 这里遍历到的是他的前一个
      while (index-- > 0) {
        target = target.next;
      }
      target.next = new ListNode(val, target.next);
      this.len++;
    }
  }
  deleteAtIndex(index) {
    if (this.len === 0 || index >= this.len || index < 0) return;
    let target = this.head;
    while (index-- > 0) {
      target = target.next;
    }
    if (target.next === this.end) this.end = target;
    target.next = target.next.next;
    this.len--;
  }
}

let a = new MyLinkedList();
a.addAtHead(2);
a.addAtHead("新来的");
a.addAtHead("伞兵一号卢本伟");
a.addAtTail("我在最后");
a.addAtIndex(2, "我是班上第三名");
a.deleteAtIndex(3); // 删掉数字2

console.log(a.get(2));
a.print();

// console.log(a);
