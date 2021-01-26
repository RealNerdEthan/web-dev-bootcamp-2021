//Reduce will take an array and reduce it down to a single value 
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

//This is the regualr way to sum the array above
// let total = 0;
// for (let price of prices){
//     total += price
// }
// console.log(total)

//This is summing the array with the reduce method
const total = prices.reduce((total, price) => {
    return total + price
})

//Implicint return version
// const total = prices.reduce((total, price) => total + price)

//Lets find the minimum price in the array
const minPrice = prices.reduce((min, price) => {
    if(price < min) {
        return price;
    }
    return min;
})

//Movies example
const movies = [
    {
        title: "Ready Player One",
        score: 99,
        year: 2018
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 1986
    },
    {
        title: "Starship Troopers",
        score: 80,
        year: 2004
    },
    {
        title: "Pokemon 2000",
        score: 100,
        year: 1999
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1995
    },
    {
        title: "Jingle All The Way",
        score: 71,
        year: 1996
    },
    {
        title: "Alien",
        score: 55,
        year: 1979
    }
]

//Highest rated movie
const highestRatedMovie = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score){
        return currMovie;
    }
    return bestMovie;
})

//We can specify where reduce will start
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100) //<-- The 100 is the second argument