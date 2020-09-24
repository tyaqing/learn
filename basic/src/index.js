import "./index.css";

let stt = "get-element-by-id";

// console.log(str);
let str = "+7(903)-123-45-67";

let regexp = /\d/g;

console.log(
  stt
    .match(/\w+\b/g)
    .map((item, index) => {
      if (index === 0) return item;
      item = item.slice(0, 1).toLocaleUpperCase() + item.slice(1);
      return item;
    })
    .join("")
);
