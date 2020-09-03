const animals = ["ant", "bison", "camel", "duck", "elephant"];

// slice() 方法返回一个新的数组对象
//这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。
//原始数组不会被改变!!!!!!!
//arr.slice([begin[, end]])
//  （包含 begin，但不包含 end）
const result = Array.prototype.slice.call(animals, 0, 2);
let result2 = animals.slice(0, 2);
// console.log(result, result2);

//splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组
//并以数组形式返回被修改的内容。
//  此方法会改变原数组!!!
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

const months = ["Jan", "March", "April", "June"];
// Array.prototype.splice.call(months, 2, 1, "append", "zhuijia");
// 这里相当于替换了一个元素
months.splice(1, 1, "exchange");
console.log(months);
