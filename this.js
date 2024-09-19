// example 1

let dog = {
    name: "Delta",
    woof: function() {
        console.log(`${this.name} goes woof woof`);
    },

    sisterDog: {
        name: "Gamma",
        woof: function() {
            console.log(`${this.name} goes woooooooooooooooooof`);
        }
    }
};

dog.sisterDog.woof();
