import "./index.css";

let person = {
  firstName: "bob",
  lastName: "smith",
  // get fullName() {
  //   return this.firstName + this.lastName;
  // },
};

Object.defineProperties(person, {
  sex: {
    // value: "male",
    get: function () {
      return "123";
    },
  },
  age: {
    value: 12,
    writable: true,
    configurable: true,
  },
});

Object.defineProperty(person, "fullName", {
  get() {
    return this.firstName + " " + this.lastName;
  },
});
delete person.age;
person.age = 123;
console.log(person);

let res = Object.getOwnPropertyDescriptors(person);
console.log(res);

let obj = {};
let obj2 = {};

console.log((123).toString([2]));
