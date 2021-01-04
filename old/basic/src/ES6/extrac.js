/**
 * string
 */

let t = "asahfqiuehbfjkanlsdfhubjadasd";

// 判断是否存在字母
console.log(t.includes("m"));

console.log(t.startsWith("as"));

console.log(t.repeat(2));

/**
 * number
 */

console.log(0b1010);
console.log(0o12344);
console.log(283713n);

console.log(Number.isFinite(Infinity));

console.log(Number.isInteger(1.2));

console.log(Number.parseInt("a123asd123"));

console.log(Math.trunc(1.123123));

/**
 * array
 */

let div = document.getElementsByTagName("div");

div = Array.from(div).forEach((item, index) => {
  // console.log(item);
});
// console.log(div);

let arr = [1, 2, 4, 5, 12, 567, 234, 2];

let data = arr.find((item) => {
  return item > 4;
});

console.log(data);

/**
 * object
 */

let o1 = {
  name: "bob",
};

let o2 = {
  age: 123,
  skill: {
    node: 1,
    get() {},
  },
};

console.log(Object.is(o1, o2));

Object.assign(o1, o2);

console.log(o1);
