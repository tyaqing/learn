function deepCopy(obj) {
  // 主要判断基本类型 object function array
  let newObj = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      // 如果子节点是对象继续克隆,如果不是object就直接赋值了
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return obj;
}

let a = {
  a: {},
  b: [1, 2, 3, { a: { b: "name" } }],
  c: function () {},
};
let d = deepCopy(a);
console.log(d);
