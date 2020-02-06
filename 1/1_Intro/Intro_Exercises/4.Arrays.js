//Exercise 1 - Array Positioning
var letter = ["a", "b", "c"];
console.log(letter[1]);

//Exercise 2 - Array Positioning
var friends = [];
var dora = {
    "name": "Dora"
};
var bibi = {
    "name":"Bibi"
};
var tina = {
    "name": "Tina"
};
friends.push(dora, bibi, tina);
console.log(friends);

//Exercise 3 - Get the index of first occurance of that value

var significantMathNumbers = [0, 2.718, 3.14159, 1729];
significantMathNumbers.indexOf(1279);

//Exercise 4 - Inserting elements

var diet = ["tomato", "cucumber", "rocolla", "kale"]
diet.splice(3, 0, "hambuger", "soda", "pizza");
console.log(diet);

//Exercise 5 - Remove element

var diet = ["tomato", "cucumber", "rocolla", "kale"]

diet.pop(); //deletes the last one and returns it
console.log(diet);