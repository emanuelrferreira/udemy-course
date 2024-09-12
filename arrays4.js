let hi = function(name) {
    return `Welcome ${name}`;
};

// next, lets define our members

let memberList = ["Tom", "Jerry"];

// lets say we get new users, John and Wally

memberList.push("John");
memberList.push("Wally");

memberList;

// greet all members

// traditional old-school for loop

for(i = 0; i < memberList.length; i++) {
    let greeting = hi(memberList[i]);
    console.log(greeting)
};

// old school way - for in loop

for(const name in memberList) {
    if(memberList.hasOwnProperty(name)) {
        let greeting = hi(memberList[name]);
            console.log(greeting);
    }
};

// for of loop

for (const name of memberList) {
    let greeting = hi(name);
    console.log(greeting);
};