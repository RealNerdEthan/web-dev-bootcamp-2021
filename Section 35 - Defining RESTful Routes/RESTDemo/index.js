const express = require('express');
const app = express();

//Allows us to submit form data
app.use(express.urlencoded({ extended: true}))
//Allows us to submit json data
app.use(express.json())

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