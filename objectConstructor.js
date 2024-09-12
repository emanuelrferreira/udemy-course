// CONSTRUCTOR FUNCTIONS

// step 1: define the object 

function Motorbike(name, color) {
    this.name = name;
    this.color = color;
}

// step 2: call the function with the new keyword

let myBike = new Motorbike('Yamaha', 'Black')

console.log(myBike);

console.log(typeof(myBike));

// blueprint - when the function is called it's gonna be called with 2 arguments


// ** 1. Using JS's inbuilt Object constructor

let person = new Object();
console.log(typeof(person));
person.name = 'Wally';
person.age = 35;
person;



// same as above, but with a constructor function

function Person1(name, age) {
    this.name = name;
    this.age = age;
}

let person2 = new Person1('Wally', 35)
console.log(person2)