let arr = [1, 2, 3, 4, 5, 1];
/**
 *indexOf
 */

console.log(arr.indexOf(2)); //获取值在数组中第一个索引
console.log(arr.lastIndexOf(1)); // 获取值在数组中最后一个索引

// 用于遍历数组
arr.forEach((item, index) => {
  console.log(item, index);
});

// map会返回修改后的数组
var arr1 = arr.map((item, index) => {
  return (item * 100 + index) >> 2;
});
console.log(arr1);

// filter会返回满足过滤条件的数组
let arr2 = arr.filter((item, index) => {
  return item % 2 === 1;
});
console.log(arr2);
