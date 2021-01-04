/**
 * charCodeAt(index) 方法返回 0 到 65535 之间的整数，表示给定索引处的 UTF-16 代码单元
 * index指的是取到第几个字符的ascii码
 */

const result = "a".charCodeAt();
const result2 = "ac9".charCodeAt(2);

console.log(result);
console.log(result2);
