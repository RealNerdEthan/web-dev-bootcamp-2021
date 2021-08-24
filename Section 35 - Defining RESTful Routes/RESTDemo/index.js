const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

//Allows us to submit form data
app.use(express.urlencoded({ extended: true}))
//Allows us to submit json data
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
//Set the view engine
app.set('view engine', 'ejs')

//This is our data array as we don't have a database yet
const comments = [
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
    const {id} = request.params;
    const comment = comments.find(c => c.id === id);
    response.render('comments/show', { comment });
})

app.get('/tacos', function(request, response){
    response.send('Get /tacos response');
})

app.post('/tacos', function(request, response){
    const { meat, qty } = request.body;
    response.send(`Ok, here are your ${qty} ${meat} tacos!`)
})

app.listen(3000, function(){
    console.log('Listening on port 3000!');
})

//Our basic CRUD app functionality blueprint:
//(Index Route) GET /comments - list all comments
//(Create Route) POST /comments/new - create a new comment
//(Show Route) GET /comments/:id - get one comments (using ID)
//(Update Route) PATCH /comments/:id - update one comments (using ID)
//(Destroy Route) DELETE /comments/:id - destroy one comment (using ID)