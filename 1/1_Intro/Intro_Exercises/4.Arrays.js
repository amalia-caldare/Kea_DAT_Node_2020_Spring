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

//Exercise 6 - Copy array

var diet = ["tomato", "cucumber", "rocolla", "kale"]
dinnerTray = diet.slice();
console.log(dinnerTray);

//Exercise 7 - For loop
var letters = ["a","b","c", "d", "e", "f", "g", "h"];

var i;
for( i = 1; i < letters.length; i=i+2) {
    console.log(letters[i]);
}

//Exercise 8 - For loop and if statement

var numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];
var discardedNumbers = [];

var i;
for(i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0 || numbers[i] > 6) {
       console.log(numbers[i]);
    }
    else {
        discardedNumbers.push(numbers[i]);
}
    
}
    console.log("Added numbers:", discardedNumbers);