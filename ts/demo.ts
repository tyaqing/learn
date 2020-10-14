interface Person {
  firstName: string;
  lastName: string;
}
class User {
  public firstName: string;
  public lastName: string;
  public fullName: string;
  private age: number = 12;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.firstName = firstName + " " + lastName;
  }
}
function getter(person: Person): void {
  // 我什么都不做
  console.log(`My name is ${person.firstName} ${person.lastName}`);
}

const data: Person = { firstName: "Bob", lastName: "Smith" };
const user = new User("Tom", "Jerry");
getter(user);
getter(data);
