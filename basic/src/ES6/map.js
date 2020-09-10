let map = new Map();

map.set("1", "str1"); // 字符串键
map.set(1, "num1"); // 数字键
map.set(true, "bool1"); // 布尔值键

map.set("1000223", ["bat", "tab", "atb"]);
console.log(map.values()); // 这里返回的是一个遍历器

for (const arr of map.values()) {
  console.log(arr);
}
