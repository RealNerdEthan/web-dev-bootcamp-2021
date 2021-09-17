const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const Campground = require('./models/campground');

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

const app = express();

//One of many 'engines' used to run or parse ejs
app.engine('ejs', ejsMate);
//Setting viewengine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Parse the body of the POST request for new campground
app.use(express.urlencoded({extended: true}));

//Use Method-Override
app.use(methodOverride('_method'));

//Home route
app.get('/', function(request, response){
    response.render('home')
});

//Campgrounds route
app.get('/campgrounds', async function(request, response){
    const campgrounds = await Campground.find({});
    response.render('campgrounds/index', {campgrounds})
});

//Used to confirm we can input and see data from database
// app.get('/makeCampground', async function(request, response){
//     const camp = new Campground({title: 'My Backyard', description: 'Cheap camping!'});
//     await camp.save();
//     response.send(camp)
// })

//New campground route
app.get('/campgrounds/new', function(request, response){
    response.render('campgrounds/new');
})

//New campround POST where the form is submitted to
app.post('/campgrounds', async function(request, response){
    const campground = new Campground(request.body.campground);
    await campground.save();
    response.redirect(`/campgrounds/${campground._id}`)
})

//Show/Details route
app.get('/campgrounds/:id', async function(request, response){
    const campground = await Campground.findById(request.params.id);
    response.render('campgrounds/show', {campground});
});

//Form route for editing campground
app.get('/campgrounds/:id/edit', async function(request, response){
    const campground = await Campground.findById(request.params.id);
    response.render('campgrounds/edit', {campground});
})

app.put('/campgrounds/:id', async function(request, response){
    const {id} = request.params;
    const campground = await Campground.findByIdAndUpdate(id, {...request.body.campground});
    response.redirect(`/campgrounds/${campground._id}`);
})

app.delete('/campgrounds/:id', async function(request, response){
    const {id} = request.params;
    await Campground.findByIdAndDelete(id);
    response.redirect('/campgrounds');
})

app.listen(3000, function(){
    console.log('Serving on port 3000...')
})