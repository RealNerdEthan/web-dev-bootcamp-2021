//Destructing Arrays
const scores = [6469, 6516, 6816, 8456, 9125, 3478, 7812];

//Old way of doing it below:
// const highScore = scores[0];
// const secondHighScore = score[1];

//Copies value from array and the order matters
const [gold, silver, bronze, ...everyoneElse] = scores;

// ----------------------------------------------------------------------------------

//Destructing Objects
const user = {
    email: "example@website.com",
    password: "password1234",
    firstName: "Edward",
    lastName: "Fernando",
    born: "1970",
    died: "2021",
    bio: "Awesome guy who like to swim.",
    city: "Lansing",
    state: "Michigan"
}

//This is a way to pull out single paired values but isn't efficient
// const firstName = user.firstName;
// const lastName = user.lastName;

//This code makes 3 seperate variables based on the firstName, lastName, email
const {firstName, lastName, email} = user; 

//If I want to access a value and rename the created variable
const {born: birthYear, died: deathYear} = user;


const user2 = {
    email: "business@workplace.com",
    firstName: "Bender",
    lastName: "Rodriguez",
    born: 2990,
    city: "New New York",
    state: "New York"
}

const {city, state, died} = user2; //<-- died will give undefinied
// const {city, state, died = "N/A"} = user2; <-- same line but we gave died a default value

// ---------------------------------------------------------------------------------

//Destructing Params

//Regular way to do it
function fullName(user) {
    return `${user.firstName} ${user.lastName}`
}

//Destructured way to do it
function fullName(user) {
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`
}

//Another example of destructing
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

// movies.filter((movie) => movie.Score >= 90)

//Here is the destructutred version
movies.filter(({score}) => score >= 90)

//Another example
movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

//Here is the movies destrutured
movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score}`
})