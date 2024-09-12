// properties and methods

let bike = {
    make: 'Yamaha',
    color: 'Blue',
    wheels: 2,
    sound : function () {
        console.log('vrooooooooooooooom')
    }
};


// get properties/methods of the object

console.log(bike.make); //property
console.log(bike['color']); //property
bike.sound(); // method


// set new properties on the object

bike.type = 'Petrol';
bike['year'] = 2019;

bike;

bike.model;

console.log(bike.model);


// (all objects have properties)

// you can add properties to just about anything in javascript

// **** 1. example

// let empty = {};
// empty.a = "hi";
// empty;

// **** 2. example

// let empty2 = [];
// empty2.a = 'hi';
// empty2;

// **** 3. example

let empty3 = function () {

};

empty3.a = 'hi';

empty3;
