let arrayLike = 'woof';

console.log(Array.from(arrayLike));


let arr = ['dog', 'cat'];
function handler(animal) {
    return `A ${animal} went walking`;
}

console.log(Array.from(arr, handler));