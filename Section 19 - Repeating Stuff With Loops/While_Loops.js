//Normally you'd use a For Loop when iderating a number
let num =0;
while(num < 10) {
    num++;
    console.log(num);

}

//While Loops are used for iderating when it's not known how many to do (based on user inputs)
const secretCode = "BabyHippo";
let guess = prompt("Enter the secret code:");
while (guess !== secretCode) {
    guess = prompt("Enter the secret code:");
}
console.log("Access Granted")

//This is a While Loop using a "break" keyword
//WARNING: This code is annoying
// let input = prompt("Simon says:")
// while(true) {
//     input.toLowerCase() = prompt(input);
//     if(input === "quit") {
//         break;
//     }
// }
// console.log("That was fun, wasn't it? :)")
