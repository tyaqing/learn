/**
 * 155. 最小栈
 */

class MinStack {
  constructor() {
    this.stack = [];
    this.min_stack = [Infinity];
  }
  push(x) {
    this.stack.push(x);
    // if(this.min_stack[])
    this.min_stack.push(Math.min(this.min_stack[this.stack.length - 1], x));
    // console.log(this.stack,this.min_stack)
  }
  pop() {
    this.min_stack.pop();
    this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.min_stack[this.min_stack.length - 1];
  }
}
