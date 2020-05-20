// test = 1;
// let test;

const example = "this is how you write a const";
//noconsole.log(test)

function addition (a, b) {
    return a + b;
}

var sum = addition(2, 5);
console.log(sum);

function pokeMe(){
    console.log("Meow");
}

pokeMe();

function approachSomeone(someoneToPoke) {
    console.log("tip tap tip tap");
    someoneToPoke();
}

approachSomeone(pokeMe);

const introduce = function(name) {
    console.log("Hello my name is", name);
}

/*function introduce(name){
    console.log("Hello my name is", name);
}*/

introduce("Anders");

/*const prepareIntroduction = function(intrucerFunction, name) {
    console.log("Hmmmm");
    intrucerFunction(name);
}

prepareIntroduction(introduce, "Amalia");*/

const prepareIntroduction = (intrucerFunction, name) => {
    console.log("Hmmmm");
    intrucerFunction(name);
}
prepareIntroduction(introduce, "Amalia");

//passing objects to functions

const aboutMe = (me) => {
    console.log("My hobby is", me.hobby);
}
const me = {
    hobby: "trains"
};

aboutMe(me);

//

const callLater = {
    toCall: () => {
        console.log("ring ring");
    }
};
callLater.toCall();
console.log(callLater)