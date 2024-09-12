let now = new Date('1 January 2020');
now;

let newDate = Intl.DateTimeFormat().format(now);
console.log(newDate);

console.log(Date.now()); 