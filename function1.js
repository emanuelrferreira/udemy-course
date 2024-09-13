// function declaration

function dog() {
    let sound = "woof";
    console.log(sound);
}

dog();

// function expression

let cat = function () {
    let sound = "Meeeeow";
    console.log(sound);
}

cat();

// *** TIMING is the main difference

// function declarations can be used in its entire scope - here global scope
sayHi ('Tom');

function sayHi(name) {
    console.log(`Hi ${name}`);
}


// function expressions are only accessible and usable when it is defined
sayBye('Josh');

let sayBye = function (name) {
    console.log(`Bye ${name}`);
}
