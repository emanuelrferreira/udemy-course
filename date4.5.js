// birthday example


// create user birthday as 15 jan 1985
let birthday = new Date(1985, 8, 3);
birthday;


// extract birthday month and birthday day

let userBirthdayMonth = birthday.getMonth(); // will return user's month of birthday which is 0
console.log(userBirthdayMonth);

let userBirthdayDay = birthday.getDate(); // will return day of birthday, which is 15
console.log(userBirthdayDay);


// current date

let now = new Date();
let currentMonth = now.getMonth();
console.log(currentMonth);
let currentDay = now.getDate();
console.log(currentDay);

// display our message if current month and day === user's birthday

if (currentMonth === userBirthdayMonth && currentDay === userBirthdayDay) {
    console.log('HAPPY HAPPY ARE YOU AMPED!!! YOU ARE OLD. HAPPY BIRTHDAY')
} else {
    console.log('Lets do nothing, its not the users birthday');
}