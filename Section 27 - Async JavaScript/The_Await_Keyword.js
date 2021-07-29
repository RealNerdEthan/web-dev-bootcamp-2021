//This is the promise
const delayedColorChange = function(color, delay){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


async function rainbow(){
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return 'All done!'
}

rainbow().then(function(){
    console.log('End of the rainbow!')
})


//Here's using another async function but waiting until after rainbow() has run
async function printRainbow(){
    await rainbow();
    console.log('Rainbow has finished running.')
}

printRainbow();