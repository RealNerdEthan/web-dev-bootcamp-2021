//Select HTML elements
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

//Main function that calls getDadJoke and appends the response to the empty ul
const addNewJoke = async function(){
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

//Function that's all about making the dad joke API request
const getDadJoke = async function(){
    try {
        //Setting this header config object is optional, you could just put the header as the second argument after the URL but that makes it a long line
        const config = {headers:{Accept: 'application/json'}}
        const response = await axios.get('https://icanhazdadjoke.com/', config)
        return response.data.joke;
    }
    catch(error){
        return 'Ope! Ran into an error!'
    }
}

button.addEventListener('click', addNewJoke)