/**
 * object简写方法
 */

let username = "joy";
let age = 12;
// key 和value可以一样
let obj = {
  username,
  age,
  getName() {
    return this.username;
  },
};

console.log(obj);
