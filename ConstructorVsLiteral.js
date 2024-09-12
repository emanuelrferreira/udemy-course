// constructor vs literal


// // **** 1. constructor function

// function Person() {
//     this.membershipStatus = false;
//     this.name = "Wally",
//     this.talk = function () {
//         console.log(`The membership status of ${this.name} is ${this.membershipStatus}`);
//     }
// };

// // you need to instantiate the object before you can use it

// let person1 = new Person();


// let person2 = new Person();
// person2.name = "John";
// person2.membershipStatus = true;

// // each person will be UNIQUE

// person1.talk();
// person2.talk();


// **** 2. literal syntax approach

// let person = {
//     membershipstatus: false,
//     name: "Wally",
//     talk: function () {
//         console.log(`The membership status of ${this.name} is ${this.membershipstatus}`);
//     }
// };

// person.talk();

// let tom = person;
// tom.name = "Tom";

// let cindy = person;
// cindy.name = "Cindy";

// cindy.talk();
// tom.talk();


// ** with the literal notation, you are always dealing with the same object (singleton)

let original = {
    name: "original"
};

let clone = original;
clone.name = 'clone';

original;
