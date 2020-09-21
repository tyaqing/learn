/**
 * class
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log("methods from Person", this.name);
  }
}

class Programer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
  // 这里重写的父类的方法
  showName() {
    console.log("methods from Programer", this.name);
  }
}

let teng = new Programer("bob", 22, { javascript: "level1" });

teng.showName();
console.log(teng);
