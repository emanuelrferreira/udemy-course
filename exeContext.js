function sayHi() {
    let name = "Wally";
    name = updateName();
    console.log(`This is the name has been executed: ${name}`);
}

function updateName() {
    return 'John';
}


sayHi();