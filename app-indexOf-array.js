let arr = ['I am the first element', 'I am the second element', 'I am the third element'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(arr.length);

// we can always access the last item in an array like this:

console.log(arr[arr.length - 1]);

const animals = ['wartog', 'giraffe', 'buffalo', 'lion'];

console.log(animals.indexOf('wartog', 1));
console.log(animals.indexOf('buffalo', 2));

// -1 means an item was not found
console.log(animals.indexOf('buffalo'));
console.log(animals.indexOf('dog'));

