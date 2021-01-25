//Old function expression example
// const add = function(x,y) {
//     return x + y;
// }

//Arrow functions are great for shortening functions. They still do the same thing, help us make a Function Expression
const add = (x,y) => {
    return x + y;
}

//Square arrow function
const square = (num) => {
    return num * num;
}

//Arrow function with no argumanets still has to have the empty ()
const rollDie6 = () => {
    return Math.floor(Math.random() * 6) + 1
}

//Exercise 48: Arrow Function Greeting
const greet = (input) => {
    return (`Hey ${input}!`);
};

//------------------------------------------------------------------------

//Implicint return value (only works with arrow functions)
const rollDie12 = () => (
    Math.floor(Math.random() * 12) + 1
)

//And we can make the dieRoll even shorter
const rollDie12 = () => Math.floor(Math.random() * 12) + 1

//Another implicint return example that's short
const subtract = (a,b) => a - b

// ----------------------------------------------------------------
//isEven examples

const isEven = function (num) { //regular function expression
    return num % 2 === 0;
}

const isEven = (num) => { //arrow function
    return num % 2 === 0;
}

const isEven = num => { //arrow function with no parens around param
    return num % 2 === 0;
}

const isEven = num => ( //implicit return (only works whrn there's 1 statment)
    num % 2 === 0
);

const isEven = num => num % 2 === 0; //one-liner implicit return (only works whrn there's 1 statment)

// -----------------------------------------------------------------------------------
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

//Regular function example
const reviewScores = movies.map(function(movie){
    return `${movie.title} - ${movie.score / 10}`;
})

//Arrow function rewrite
const reviewScoresArrowFunc = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

//Arrow functions show up a lot when we're passing a function into another function