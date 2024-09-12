// get methods are based on users local machines time
// to be more accurate, you may want to use UTC time


let now = new Date();
//print time normally
console.log(now.getHours());

// lets use UTC time
console.log(now.getUTCHours());