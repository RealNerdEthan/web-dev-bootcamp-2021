const express = require('express');
const app = express();

//This prints the console.log lessage everytime the server gets a new request. Also prints out the response.send message
// app.use(function(request, response){
//     //console.log('We got a new request!')
//     response.send('<h1>This is my webpage!</h1>')
// })

//----Automatic Routes--------------------------------------------------------------------
//We're setting a route pattern for /r/subreddit requests
app.get('/r/:subreddit', function(request, response){
    const {subreddit} = request.params;
    response.send(`<h1>Browsing the ${subreddit} subreddit!</h1>`)
})

//This is anouther route pattern
app.get('/r/:subreddit/:postId', function(request, response){
    const {subreddit, postId} = request.params;
    response.send(`<h1>Viewing the Post ID:${postId} on r/${subreddit}!</h1>`)
})

//----Manual Routes--------------------------------------------------------------------

//This is the home request route
app.get('/', function(request, response){
    response.send('Welcome to the homepage!')
})

//This route looks for /cats requests and responds with 'Meow!'
app.get('/cats', function(request, response){
    console.log('Cat request!')
    response.send('Meow!')
})

//This illustrates a post request which we can see in Postman
app.post('/cats', function(request, response){
    response.send('Post request to /cats! This is different than a get request!')
})

//This route looks for /dogs requests and responds with 'Woof!'
app.get('/dogs', function(request, response){
    console.log('Dog request!')
    response.send('Woof!')
})

//Query route
app.get('/search', function(request, response){
    const {q} = request.query;
    if(!q){
        response.send('Nothing found if nothing searched!')
    }
    response.send(`<h1>Search results for: ${q}</h1>`)
})

//This route will match with all requests and respond with a generic response. MUST BE AT THE END!
app.get('*', function(request, response){
    response.send("I don't know that path, sorry!")
})


//This starts the server which uses port 3000
app.listen(3000, function(){
    console.log('Listening on port 3000!')
})