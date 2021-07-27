const fakeRequest = function(url) {
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

//Here we are storing the value of the promise above and console.logging an error if we encounter one while still continuing to execute the code
async function makeTwoRequests(){
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch(error){
        console.log('Caught an error:',error)
    }

}