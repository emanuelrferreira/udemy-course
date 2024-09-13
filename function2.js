// function declaration

function dog() {
    console.log('woof');
}

// we can treat this function as a value and assing it to another variable

let sausageDog = dog;

// to invoke our function, we use the normal ()

sausageDog();
dog();