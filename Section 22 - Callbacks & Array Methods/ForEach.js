//ForEach allows us to run a function (or some code) once per item in an array.
//ForEach is an array callback method that expects a function to be passed in as seen below
//Example:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

//It is uncommon to define the function outside of the ForEach, but it is possible and allows the function to be resused elsewhere
// function print(element) {
//     console.log(element)
// }

//This is the much more common way to do it, and this function will only be used and accessable here (it's not something we plan to call on later)
numbers.forEach(function (element) {
    console.log(element);
})

//Here is an example where we want all the even numbers in the array
numbers.forEach(function (element) {
    if (element % 2 === 0) {
    console.log(element);
    }
})

//This is the new way to accomplish this by using a ForOf (which is newer than ForEach)
for(let element of numbers) {
    console.log(element);
}


//Here is a more complex example using ForEach (each nove is an object within the array)
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

//The goal is to print out "Movie - score/100"
movies.forEach(function(movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})