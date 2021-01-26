//Filtering never changes the original array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//This will return a new array with our filter results
numbers.filter(n => {
    return n < 10
})

//Another example of using filter
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

// const goodScores = movies.filter(movie => {
//     return movie.score > 80
// })

//A copact version of the line above:
const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

//This will combine the two lines above
const goodMoviesTitles = movies.filter(m => m.score > 80).map(m => m.title)

const badMovies = movies.filter(m => m.score < 70)

const recentMovies = movies.filter(m => m.year > 2000)

//Exercise 49: Filtering an array
const validUserNames = (input) => {
    return input.filter(i => i.length < 10);
};