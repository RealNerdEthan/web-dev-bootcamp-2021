//Logical AND && (Both sides need to be true)
//Logical OR || (Only 1 side needs to be true)
//Logical NOT ! (Negates the value, if something is false it makes it true and vice cersa)

const firstName = prompt("Enter your first name:");

if (!firstName) {
    firstName = prompt("Please try again!");
}

const age = 8;
if (!(age >= 0 && age <5 || age >= 65)) { //The ! in this is flipping the entire age section
    console.log("You are not a baby or a senior")
}