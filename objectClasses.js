// CLASSES

// 1. constructor function

// function Person(name) {
//     this.name = name;
// };

// Person.prototype.greeting = function() {
//     console.log(this.name);
// };

// let user = new Person("Wally");
// user.greeting();

// 2. class syntax

class Person {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(this.name)
    };
}

let user = new Person("John");
user.greeting();

// in JavaScript a class is a kind of function, and it puts the methods we create here into the prototype porperty

console.log(typeof(Person));

console.log(Person === Person.prototype.constructor)

console.log(Object.getOwnPropertyNames(Person.prototype));