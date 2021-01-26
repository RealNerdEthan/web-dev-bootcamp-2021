//Some and eVERY are boolean methods

//Every tests if every element returns true, and if so it returns true
const exams = [80, 98, 92, 78, 72, 90, 89, 84, 81, 67]

//Each element will be passed into the callback method below, and the callback will return true or false
exams.every(score => score >= 75) //<-- Will return false


//Some test if some (1 or more) elements are true, if so will return true
exams.some(score => score > 75) //<-- Will return true

//More examples -----------------------------------------------------------------
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

movies.some(movie => movie.year > 2015)


//Exercise 50: Every Even Number
const allEvens = (input) => {
    return input.every(i => i % 2 === 0);
};