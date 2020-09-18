/**
 * 622. 设计循环队列
 */
class MyCircularQueue {
  constructor(length = 5) {
    this.length = length;
    this.quene = [];
    this.head = -1;
    this.tail = -1;
  }
  Front() {
    if (this.isEmpty()) return -1;
    return this.quene[this.head];
  }
  Rear() {
    if (this.isEmpty()) return -1;
    return this.quene[this.tail];
  }
  // 入队
  enQueue(value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.head = 0;

    this.tail = (this.tail + 1) % this.length;
    this.quene[this.tail] = value;
    // console.log(this.quene,this.head,this.tail)
    return true;
  }
  // 出队
  deQueue() {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) this.head = this.tail = -1;
    else this.head = (this.head + 1) % this.length;
    return true;
  }
  isEmpty() {
    return this.tail === -1;
  }
  isFull() {
    return this.head === (this.tail + 1) % this.length;
  }
}
