// using BIND

let user = {
    balance: 0,
    show: function(fname, lname, age) {
        console.log(`${fname} ${lname} is ${age} years old and has a balance of ${this.balance}`);
    }
};

let topupBalance = {
    balance: 100
};

// user.show("John", "Doe", 35);

// using call

// user.show.call(topupBalance, "John", "Doe", 35);

// we use the BIND when we don't know the keys

let bindUser = user.show.bind(topupBalance);

// code here

// code here


bindUser("John", "Doe", 35);