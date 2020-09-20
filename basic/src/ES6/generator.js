import axios from "axios";

/**
 * generator
 */

function* myGenerator() {
  // console.log("start");
  yield { key: 2 };
  yield { name: "2" };
}

let mg = myGenerator();
let mg2 = myGenerator();
console.log(mg.next());
// console.log(mg.next());
// console.log(mg.next());
for (const i of mg2) {
  console.log(i);
}
let url =
  "https://www.easy-mock.com/mock/5901e0117a878d73716dd641/example/students";

function getData() {
  axios({
    url,
  }).then((res) => {
    SX.next(res);
  });
}

function* sendXML() {
  let data = yield getData();
  console.log(data);
  let data2 = yield getData();
  console.log("2", data2);
}

let SX = sendXML();
SX.next();
symbol.iterator;
