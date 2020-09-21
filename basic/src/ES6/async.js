import axios from "axios";
/**
 * async
 */

// 1. 可以跟promise一起使用
// async function fun() {
//   let data = await Promise.resolve({ a: 1 });
//   console.log(data);
//   let result = await Promise.reject("cuole ");
//   console.log(result);
// }

// fun();
let url =
  "https://www.easy-mock.com/mock/5901e0117a878d73716dd641/example/students";

// 与axios

async function getUser() {
  let data = await axios({
    url,
  });
  console.log(data);
}

getUser();
