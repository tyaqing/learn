class Person {
  readonly name: string;
  private age: number = 2;
  protected constructor(name: string) {
    this.name = name;
  }

  protected showName() {}
}

class Driver extends Person {
  constructor(name: string) {
    super(name);
  }
  public printName() {
    console.log(this.name);
  }
}

let darvi = new Driver("darvi");
// darvi.name = "sss";
darvi.printName();

// let bobo = new Person('ss');
