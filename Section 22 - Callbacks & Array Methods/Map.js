//Accepts a callback function and runs it once per element in the array, but it then generates a new array with the return value from the function

//Example:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//Let's double the value of each element in the array
const doubles = numbers.map(function(num){
    return num * 2;
})
//Now there's a new array called "doubles"

//Another example:
const movies = [
    {
        title: "Ready Player One",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Starship Troopers",
        score: 80
    },
    {
        title: "Pokemon 2000",
        score: 100
    }
]

//Now lets make a new array with only the movie titles, then uppercase them by chaining methods
const titles = movies.map(function(movie){
    return movie.title.toUpperCase();
})


//Exercise 47: Map Practice
//Trim names in the array and return the values in a new array called cleanNames

//This commented out code is how to create a new variable, but isn't the function that was requsted
// const names = ["  ethan ", "madeline   ", "   Ashley", " ella   ", "meowth "];

// const cleanNames = names.map(function(name){
//     return name.trim();
// });

function cleanNames(names){
    return names.map(function(name){
        return name.trim();
    });
}