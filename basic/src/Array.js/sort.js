/**
 sort() 方法用原地算法对数组的元素进行排序，
 并返回数组。
 默认排序顺序是在将元素转换为字符串，
 然后比较它们的UTF-16代码单元值序列时构建的

  对原数组有影响

  arr.sort([compareFunction])

 */

let arr = [-4, 2, 2, 5, -1, 8, -8, 12];

// 如果不传参 如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
// arr.sort();

/**
如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
简单来说
 <0是升序
 >0是降序

*/

arr.sort((a, b) => a - b);

// compare < 0

console.log(arr);
