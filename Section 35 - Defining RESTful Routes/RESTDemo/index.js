const express = require('express');
const app = express();
const path = require('path');

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
        username: 'Ethan',
        comment: 'Haha! That is super funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching and sip coffee on cool mornings.'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Anyone know where I can find good used board parts?'
    },
    {
        username: 'onlysaywoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments', function(request, response){
    response.render('comments/index', { comments })
})

app.get('/tacos', function(request, response){
    response.send('Get /tacos response')
})

app.post('/tacos', function(request, response){
    const { meat, qty } = request.body;
    response.send(`Ok, here are your ${qty} ${meat} tacos!`)
})

app.listen(3000, function(){
    console.log('Listening on port 3000!')
})

//Our basic CRUD app functionality blueprint:
//(Index Route) GET /comments - list all comments
//(Create Route) POST /comments - create a new comment
//(Show Route) GET /comments/:id - get one comments (using ID)
//(Update Route) PATCH /comments/:id - update one comments (using ID)
//(Destroy Route) DELETE /comments/:id - destroy one comment (using ID)