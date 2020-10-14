var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.age = 12;
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName + " " + lastName;
    }
    return User;
}());
function getter(person) {
    // 我什么都不做
    console.log("My name is " + person.firstName + " " + person.lastName);
}
var data = { firstName: "Bob", lastName: "Smith" };
var user = new User("Tom", "Jerry");
getter(user);
getter(data);
