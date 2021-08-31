//Header -----------------------------------------------------------------
const mongoose = require('mongoose');

//Connect to the MongoDB
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection open!");
    })
    .catch(err => {
        console.log("Encountered an error!");
        console.log(err);
    });
// -----------------------------------------------------------------------


    //Schema is a mapping of different 'collection keys' from Mongo to differernt 'types' in JavaScript
    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String
    });

    //Make a model using the above schema
    const Movie = mongoose.model('Movie', movieSchema);
    
    //Make a new instance of movie (must call .save())
    // const waterWorld = new Movie({title: 'Water World', year: 1995, score: 6.2, rating: 'PG-13'});

    //Insert many instances of movie (not very common) and since it returns a promise we don't need to call .save()
    Movie.insertMany([
        { title: 'Amelie', year: 2021, score: 8.3, rating: 'R' },
        { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
        { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
        { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
        { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
    ])
    .then(function(data){
        console.log('It worked!');
        console.log(data);
    });