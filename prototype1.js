// food object

let food = {
    init: function(type) {
        this.type = type;
    },
    recipe: function() {
        console.log(`This a recipe for ${this.type}`)
    }
};

let donut = Object.create(food);
donut.init('Donuts');
donut;

food.type = "BLAH BLAH BLAH";

donut.recipe();

console.log(food.isPrototypeOf(donut));