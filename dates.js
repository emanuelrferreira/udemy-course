// create variable with the current time
let now = new Date();
now;


// get the current timeStamp

console.log(now.getTime()) // how many millisecconds has passed since 1970



let date1 = Date();
let date2 = new Date();

// they look the same

date1
date2
// but they are not the same

console.log(typeof(date1));
console.log(typeof(date2));

// its just a string
console.log(date1.getTime());


// 4 ways to create a date

let date3 = new Date();
let date4 = new Date(0);


// log them out here

date3;
date4;