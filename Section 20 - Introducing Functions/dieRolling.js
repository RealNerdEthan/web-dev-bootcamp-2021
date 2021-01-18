let command = prompt("What do you wish to do?");
let dieChosen = 0;
// function rollDie(dieChosen) {
//     let dieResult = Math.floor(Math.random() * dieChosen) + 1
//     return dieResult;
//     }

function rollDie(dieChosen) {
    return((Math.random() * dieChosen) + 1);
    }

while (command.toLowerCase() !== "quit") {
   if (command.toLowerCase() === "roll") {
       let dieChosen = prompt("What die do you wish to roll?");
       if (dieChosen.toLowerCase() === "4") {
        console.log("You rolled a 4 sided die and got ", rollDie(), "!")
        } else if(dieChosen.toLowerCase() === "6") {
            console.log(`You rolled a 6 sided die and got ${rollDie()}!`)
        } else if (dieChosen.toLowerCase() === "8") {
            console.log(`You rolled a 8 sided die and got ${rollDie()}!`)
        } else if (dieChosen.toLowerCase() === "10") {
            console.log(`You rolled a 10 sided die and got ${rollDie()}!`)
        } else if (dieChosen.toLowerCase() === "12") {
            console.log(`You rolled a 12 sided die and got ${rollDie()}!`)
        } else if (dieChosen.toLowerCase() === "20") {
            console.log(`You rolled a 20 sided die and got ${rollDie()}!`)
        } else {
            command = prompt("Invalid number entered, exited roll. What do you wish to do?")
        }
   }
   else {
       break;
   }
}

console.log("You have quit the app! Please refresh to restart!");