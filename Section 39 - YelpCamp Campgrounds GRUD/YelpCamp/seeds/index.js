//This is our seed data in case we ever want to do any testing. Every time it runs, it deletes any previous DB data and creates new data. NOT MEANT TO BE USED AS AN ACTUAL DATABASE

const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

//These options are no longer needed in v6 of Mongoose
// https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
});

//Setting up the database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function(){
    console.log('Database connected...')
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async function(){
    await Campground.deleteMany({});
    for(let i = 0; i < 50; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();
    }
}

seedDB().then(function(){
    mongoose.connection.close();
})