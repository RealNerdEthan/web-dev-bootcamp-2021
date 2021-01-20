//Write a function called returnDay. This function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)&nbsp; If the number is less than 1 or greater than 7, the function should return null.

//Hint: store the days of the week in an array, or use an object with numerical keys.&nbsp; When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

//This technically works but doesn't use an array as requested
// function returnDay(input){
//     if (input === 1){
//         return "Monday";
//     } else if (input === 2){
//         return "Tuesday";
//     } else if(input === 3) {
//         return "Wednesday";
//     } else if(input === 4) {
//         return "Thursday";
//     } else if(input === 5) {
//         return "Friday";
//     } else if(input === 6) {
//         return "Saturday";
//     } else if(input === 7) {
//         return "Sunday";
//     } else {
//         return "null";
//     } 
// }


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
