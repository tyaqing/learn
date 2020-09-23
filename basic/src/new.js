// 模拟一个构造函数

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getName = () => {
    return this.name;
  };
  // console.log("laile ");
}

function myNew(Constructor, ...argus) {
  const obj = {}; // 此时obj的prototype已经创建了
  obj.__proto__ = Constructor.prototype; // 将隐式原型链指向Person的显示原型链上
  let res = Constructor.apply(obj, argus);
  // console.log(Constructor, res, argus);
  // 这里怕Constructor返回了一个对象
  return typeof res === "object" ? res : obj;
}

let person1 = myNew(Person, "work1", 32);
let person2 = new Person("person2", 23);
console.log(person1, person2);
