// Test shows if the patterns appear in the strings

// i flag = case insensitive
const myRegEx = /hello/i;
const result = myRegEx.test("Hello World")

// Pipe = or
const petString = "I have a cat";
const petRegEx = /cat|dog|sheep/;
//console.log(petRegEx.test(petString));

// Match

const extractString = "Extract this word from a string";
const wordRegex = /word/;
//console.log(extractString.match(wordRegex));

// The Global flag - it doesnt run only once, but globally
//console.log("Repeat, Repeat, Repeat".match(/Repeat/g));

let twinkleString = "Twinkle, twinkle, little star";
//console.log(twinkleString.match(/twinkle/ig));

// Wildcards: hu. starts with, .hu end with

const humStr = "This is humbug";
const hugStr = "I need a hug";
const huRegex = /hu./;

console.log(humStr.match(huRegex));
console.log(hugStr.match(huRegex));

// Wildcard II - One of the following letters b - start letter and [] next letters

console.log("I found big bugs in my bag".match(/b[aiu]g/ig));

// Range
console.log("123abc456".match(/[0-9]/g));
console.log("Twinkle Twinkle twinkle".match(/[a-z]/ig));