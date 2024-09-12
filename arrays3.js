// *** 1. MUTATE METHODS

let numbers = [5, 10, 15];
console.log(numbers.push(20));
numbers;

let original = ['blue', 'green'];
let amended = original.push('red');

original;

// *** 2. ACCESSOR METHODS

let names = ["John", "Wally"," Cindy"];
let copy = names.slice(1, 3);
copy;
names;

// *** 2. ITERATOR METHODS

let animals = ["dog", "cat"];

const animalIterator = animals.map(function(animalType) {
    console.log(`We are dealing with a ${animalType}`)
});

animals;