const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

//Allows us to submit form data
app.use(express.urlencoded({ extended: true}))
//Allows us to submit json data
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
//Set the view engine
app.set('view engine', 'ejs')

//This is our data array as we don't have a database yet
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'You should buy Skyrim again!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching and sip coffee on cool mornings.'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Anyone know where I can find good used board parts?'
    },
    {
        id: uuid(),
        username: 'onlysaywoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', function(request, response){
    response.render('comments/index', { comments });
})

//This route serves and renders a form
app.get('/comments/new', function(request, response){
    response.render('comments/new');
})

//Where the form submits it's data to and extracts the body, then sending the user back to /comments
app.post('/comments', function(request, response){
    const {username, comment} = request.body;
    comments.push({username, comment, id: uuid() });
    response.redirect('/comments');
})

//this grabs the comment by ID and renders the response with the data on /comments/show (normally could be a tweet, a subreddit, anything really that used an ID)
app.get('/comments/:id', function(request, response){
    const { id } = request.params;
    const comment = comments.find(c => c.id === id);
    response.render('comments/show', { comment });
})

//A route to setup a form to edit a resource
app.get('/comments/:id/edit', function(request, response){
    //Get the comment id
    const { id } = request.params;
    // Use id to pass through any info to the form we might need
    const comment = comments.find(c => c.id === id);
    //We pre-populated the form with that information
    response.render('comments/edit', { comment });
})

//Setting up a route for patching comments
app.patch('/comments/:id', function(request, response){
    //Grab ID from URL
    const {id} = request.params;
    //Taking whatever was sent in the request body.comments
    const newCommentText = request.body.comment;
    //Find a comment with the matching ID
    const foundComment = comments.find(c => c.id === id);
    //Update the comment's comment property with whatever was in request.body.comment
    foundComment.comment = newCommentText;
    //Send the user back to the comments index page
    response.redirect('/comments');
})

app.delete('/comments/:id', function(request, response){
    const { id } = request.params;
    //comments.filter will actually return a new array so we aren't mutating the existing array
    comments = comments.filter(c => c.id !== id);
    response.redirect('/comments');
})

// app.get('/tacos', function(request, response){
//     response.send('Get /tacos response');
// })

// app.post('/tacos', function(request, response){
//     const { meat, qty } = request.body;
//     response.send(`Ok, here are your ${qty} ${meat} tacos!`)
// })

app.listen(3000, function(){
    console.log('Listening on port 3000!');
})

//Our basic CRUD app functionality blueprint:
//(Index Route) GET /comments - list all comments
//(Create Route) POST /comments/new - create a new comment
//(Show Route) GET /comments/:id - get one comments (using ID)
//(Update Route) PATCH /comments/:id/edit - update one comments (using ID)
//(Destroy Route) DELETE /comments/:id - destroy one comment (using ID)