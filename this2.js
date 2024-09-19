// CALL and APPLY

function add(a, b) {
    console.log(a + b + this.c + this.d);
}

add(1, 2);

// lets create a new object with properties c and d

let obj = {
    c: 10,
    d: 20
};

// lets use the call method

add.call(obj, 1, 2)

// lets use the apply method

add.apply(obj, [1, 2])

