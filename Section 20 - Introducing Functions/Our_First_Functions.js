function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}

//Arguments Function below
function greet(firstName) {
    console.log(`Hello ${firstName}!`)
}

function greeting(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName[0]}.!`);
}

//Repeates a string some number of times
function repeat(word, numTimes){
    for (let i = 0; i < numTimes; i++)
    console.log("Hello");
}

//Concatenating a string some number of times
function repeat(string, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += string;
    }
    console.log(result);
}

//I made a dice rolling function
function rollDie(mathRock) {
    let numberChosen = mathRock;
    let die1 = Math.floor(Math.random() * numberChosen) + 1;
    console.log(`You rolled a ${mathRock} sided die and got ${die1}!`)
}

//Rewritten to make the code shorter
function rollDie(dieChosen) {
    let dieResult = Math.floor(Math.random() * dieChosen) + 1
    console.log(`You rolled a ${dieChosen} sided die and got ${dieResult}!`)
    }


//Here are functions that use the Return keyword which allows us to save it to a variable
//Retun keyword actually stops the function from exucting any code below the return inside the function
function add(x, y) {
    return x + y;
}

//An example of the return stopping code running when encountered
//Return can only return 1 thing (can be a sum, array, etc)
function add2(x, y) {
    if(typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    return x + y;
}

//Retun last element in array Exercise
function lastElement(array){
    if(array.length >= 1) {
        return array[array.length - 1];
    } else {
        return null;
    }
 }
 
 let array = ["Ethan", "Morgan", "Ashley", "Cody"];
 console.log(lastElement(array));

 //Capitalize first letter in string Exercise
 function capitalize(enteredValue){
    let newString = enteredValue[0].toUpperCase() + enteredValue.slice(1);
    return newString;
}

console.log(capitalize("cat"))

//Sum Array Exercise 42
let sum = 0;
function sumArray(input){
    for (let i = 0; i < input.length; i++){
        sum += input[i];
    }
    return sum;
}

//Day of week Exercise 43
//Function that accepts one paramaeter and returns day of week, else returns null
function returnDay(input) {
    if (input > 0 && input < 8){
        return daysOfWeek[input - 1];
    } else {
        return "null";
    }
}

//Array of days
const daysOfWeek= [
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday", 
    "Sunday"
];