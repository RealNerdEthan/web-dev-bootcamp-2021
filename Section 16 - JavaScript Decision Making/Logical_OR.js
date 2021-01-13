//Logical AND && (Both sides need to be true)
//Logical OR || (Only 1 side needs to be true)
//Logical NOT !

// 0-5 Free
// 6-10 Child $10
// 11-65 Adult $20
// 66+ Free

const age = -20;

if (age >= 0 && age <5 || age >=66) {
    console.log("Free")
} else if (age >= 6 && age < 10){
    console.log("$10")
} else if (age >= 11 && age < 66) {
    console.log("$20")
} else {
    console.log("Invalid Age")
}