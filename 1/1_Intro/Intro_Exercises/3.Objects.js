//Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};
console.log(myObj.message); //dot notation
//2nd method
console.log(myObj["message"]) //bracket notation
 
//Exercise 2 - Defining an object

var person = { "name": "Amalia",
                "age": "20",

};

//Exercise 3 - Add a property

var stackOverflow = {};
stackOverflow.isAllowed = true;

//Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}
delete thisSong.description;
thisSong["about"] = "Just a tribute";