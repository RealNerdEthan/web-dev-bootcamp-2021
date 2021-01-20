//Variable totalEggs is inside the fucntion and only accessable to the function
function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs)
}

//This is uncommon but you can update a global variable's value by running it through a function
let totalFruit = 0;
function collectFruit() {
    totalFruit = 12;
}
console.log(totalFruit);
collectFruit();
console.log(totalFruit);

//You can create a new variable inside a function without effecting the global variable, even if they have the same name. The variable inside the function is only accessable to that function.
let bird = "Scarlet Macaw";
function birdWatch() {
    let bird = "Great Blue Heron";
    console.log(bird)
}
console.log(bird)

//-----------------------------------------------------------------------------------------------

//Block Scope, this shows that the variable PI isn't accessable outside of the conditional "if"'s block scope
let radius = 8;
if (radius > 0){
    const PI = 3.14159 //This isn't accessable outside of the {} block
    let msg = "Mmm PI!"
}
console.log(radius);
console.log(PI)

//Another example using a different conditional called "for"
for (let i = o; i < 5; i++) {
    let msg = "I'm inside of the block!"
    //console.log(msg) <-- this would have access to the msg variable
}
console.log(msg) // <-- This doesn't have access to the msg variable

//Using var to create a variable allows you to access them outside of any block scope (but still don't use it)

//-----------------------------------------------------------------------------------------------

//Lexical Scope: An inner functionnested inside a parent function has access to variable in the scope of that parent function, and if we nested more functions they would also have access BUT the parent functions don't have access to their child variables
function bankRobbery(){
    const heros = ["Spiderman", "Wolverine", "Black Panther", "Iron Man"]
    function cryForHelp(){
        for (let hero of heros) {
            console.log(`Please help us, ${hero.toUpperCase()}!`)
        }
    }
    cryForHelp();
}