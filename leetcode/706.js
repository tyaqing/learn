/**
 * 706. 设计哈希映射
 */
// 使用对象设计哈希映射 232ms
class MyHashMap {
  constructor() {
    this.map = {};
  }
  put(key, val) {
    this.map[key] = val;
  }
  get(key) {
    const result = this.map[key];
    if (result !== undefined) return result;
    return -1;
  }
  remove(key) {
    delete this.map[key];
  }
}
