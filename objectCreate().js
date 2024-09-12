// object.create()

// example 1. you have to pass an object (or null) as the prototype

// let person = Object.create();

// example 2. practical employee example

// create company 1 called Dog Factory

let dogProto = {
    company: "The Dog Factory"
};

// create company 2 called Cat Factory

let catProto = {
    company: "The Cat Factory"
};

// create employee
let employee1 = Object.create(dogProto);
employee1.name = 'Frank';

let employee2 = Object.create(catProto);
employee2.name = 'Julie';

console.log(`${employee1.name} works for ${employee1.company}`);
console.log(`${employee2.name} works for ${employee2.company}`);