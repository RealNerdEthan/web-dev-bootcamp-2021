let maximumNum = parseInt(prompt("Enter a maximun number for the guessing game:"));
while (!maximumNum) {
    maximumNum = parseInt(prompt("Enter a maximun NUMBER only:"))
}

const targetNum = Math.floor(Math.random() * maximumNum) + 1;

let guess = parseInt(prompt("Enter your first guess:"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "quit") break;
    attempts++;
    if(guess > targetNum) {
        guess = prompt("Too high, enter a new guess:");
    } else {
        guess = prompt("Too low, enter a new guess:");
    }
}

if(guess === "quit") {
    console.log("Ok, see you later!")
} else {
console.log (`You got it! It took you ${attempts} guess(es)!`)
}