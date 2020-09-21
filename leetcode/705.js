/**
 * 705. 设计哈希集合
 */
// 使用数组设计 364ms
// class MyHashSet{
//     constructor(){
//         this.set = [];
//     }
//     add(value){
//         // 查重
//         if(this.set.indexOf(value)===-1){
//             this.set.push(value);
//         }
//     }
//     contains(value){
//         // console.log(this.set)
//           if(this.set.indexOf(value)===-1){
//             return false
//         }
//         return true;
//     }
//     remove(value){
//         let index = this.set.indexOf(value);
//         if(index!==-1){
//             this.set.splice(index,1);
//         }
//     }
// }

// 使用对象实现 220ms
class MyHashSet {
  constructor() {
    this.set = {};
  }
  add(value) {
    this.set[value] = true;
  }
  contains(value) {
    if (this.set[value] === true) return true;
    return false;
  }
  remove(value) {
    delete this.set[value];
  }
}
