//This is a preconstructed function to simulate calling a webAPI for the purposes of demoing below
const fakeRequestPromise = function(url) {
    return new Promise(function(resolve, reject){
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(function(){
            if (delay > 4000){
                reject('Connection timed out')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//Examples below

const request = fakeRequestPromise('yelp.com/api/coffee');
request.then(function(){
    console.log('Data successfully recieved')
}).catch(function(){
    console.log('On no, error encountered!')
})