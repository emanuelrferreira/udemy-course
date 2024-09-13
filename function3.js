// with a cronstructor function, the value of this is bound to the newly created object being created

// function Person() {
//     this.name ="Wally";
// }

// let user = new Person();
// user;

// set a timer using setInterval

function Person() {
    this.firstName = "Wally";
    let scope = this;
    this.display = setInterval(() => {
        console.log(scope === this);
    }, 1000);
}

let user = new Person();