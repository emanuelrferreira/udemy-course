// objects can be passed by reference into functions

// creating a function

function changeName(user) {
    user.fname = "John Doe";
};

// create a person

let person = {
    fname: 'Wally'
};

person; 

changeName(person);

person;