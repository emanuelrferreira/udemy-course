// object literal syntax

let empty = {};
empty; 

// object with 1 property

let dog = {
    name: "Woofy"
};

dog;


// you have to specify both key and value

// let animal = {
//     type: will give and error here !!
// };

// an object with 1 method

let welcomeMessage = {
    sayHi: function (text) {
        console.log(text)
    }
};


welcomeMessage.sayHi('Hellllooo');

// an object with properties and methods

let person = {
    firstName: "Clyde",
    age: 35,
    message: function () {
        console.log(`${this.firstName} is ${this.age} years old.`)
    }
};

person.message();