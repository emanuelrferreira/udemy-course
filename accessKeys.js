let fruit = {
    bananas: 12,
    carrots: 2,
    mangos: 7
};

fruit; 

// method 1: object.keys

let fruitKeys = Object.keys(fruit);
fruitKeys;

// method 2: object.values

let fruitValues = Object.values(fruit);
fruitValues;

// method 3: object.entries

let fruitEntries = Object.entries(fruit);
fruitEntries;

// if you use object.entries, you probably want to extract the key valeu pairs

for (const [fruitKeys, fruitValues] of fruitEntries) {
    console.log(`You need to buy ${fruitValues} ${fruitKeys}`);
}