function sum(a,b){
    return a+b;
}
console.log(sum(3,5));

// Various Ways of Writing Functions

function greet(firstName, nickName, greeting){
    return `${greeting} ${firstName}! I hope you'll be fine. We are pleased to invite you to our community meetup. ✨ Hope to see you there ${nickName}. 🤩`
}
console.log(greet("Aaminah", "Meenicious", "Hey 👋"));

// Anonymus function

const legsOfCow = function(){
    console.log("There are 4 legs of cow.");
}
legsOfCow();

// first-class function

// When you assign a function to a variable, it’s called “first-class function” behavior. In programming languages like Python and JavaScript, functions are treated as first-class objects, which means they can be:

// Assigned to variables.
// Passed as arguments to other functions.
// Returned from other functions.

const bellRings = function doorbell(){
    console.log("Ting Tong");
}
bellRings();

// Arrow function
const happy = () => {
    console.log("chirp chirp");
}
happy();