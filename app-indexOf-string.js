let sentence = "Hello world, the universe welcomes you";
console.log(typeof(sentence));

let n = sentence.indexOf('welcomes');
n;

const sentence2 = 'Are you learning a lot in this course? Keep learning!';

let searchWord = 'learning';
let firstTime = sentence2.indexOf(searchWord);
firstTime;

let secondTime = sentence2.indexOf(searchWord, firstTime + 1);
secondTime;


let solution1 = `The index of the first "${searchWord}" word from the begninning is ${firstTime}`;
solution1;

let solution2 = `The index of the second "${searchWord}" word from the begninning is ${secondTime}`;
solution2;

// indexOf is case sensitive 

const word = "Red dog";
console.log(word.indexOf('dog'));
console.log(word.indexOf('red'));
console.log(word.indexOf('Red'));

if (word.indexOf('red') == -1) {
    console.log('This is the correct answer')
} else {
    console.log('this is the wrong answer')
};

// -1 does not evaluate to false so when checking it you should replace 'false' for -1