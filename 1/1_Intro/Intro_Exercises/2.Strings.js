//Exercise 3 - Add numbers from string to float
var numberOne = "1.10";
var numberTwo = "2.30";

var sum = Number(numberOne) + Number(numberTwo);
console.log(sum);

//Exercise 4 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

var avg = ((one+two + three) / 3).toFixed(5);
console.log(avg);

//Exercise 5 - Add the numbers and the total with 2 decimals
var numberOne = "1.10";
var numberTwo = "2.30";

var result = ((parseFloat(numberOne) + parseFloat(numberTwo)).toFixed(2));
console.log(result);

//Exercise 6 - Get characters by index
var letters = "abc";
console.log(letters.charAt(2));

//Exercise 7 - Replace
var fact = "You are learning javascript";
console.log(fact.replace("javascript","Javascript"));
console.log(fact.indexOf("j"));