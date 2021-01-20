//Basic exmaple of returning a function
function makeMysteryFunc(){
    const rand = Math.random();
    if(rand > 0.5){
        return function() {
            console.log("Congradualtions!")
            console.log("You win 1 million dollars!")
        }
    } else {
        return function(){
            console.log("You have lost the game!")
        }
    }
}

const mystery = makeMysteryFunc();
console.log(mystery());

//Next Example where a function will make a fucntion for me

//Basic fucntion giving true/false if a number is between 1 and 10
// function isBetween(num) {
//     return num >= 5 && num <= 10
// }

//Function Factory where it will make it's own function to handle the numbers you pass in (basically plugs them into the function you created)
function makeBetweenFunc(min, max){
    return function(num) {
        return num >= min && num <= max;
    }
}

//Then you can create a variable that uses the Factory Function liek this:
const isChild = makeBetweenFunc(0,17)

//And run a command like this:
//isChild(8)
//Which would return true

//Next you could:
const isAdult = makeBetweenFunc(19,64)
//isAdult(17)
//false

//Then again you could:
const isSenior = makeBetweenFunc(65,120)
//isSenior(110)
//true

//So basically we created 3 variables using the same function and don't have to rewrite it to manually plug in our own numbers