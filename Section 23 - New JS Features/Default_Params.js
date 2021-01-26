//Roll a die, an if user doesn't pass in a vlaue we use 6 by default (this is the old way)
function rollDie(numSides){
    if (numSides === undefined){
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
}

//This is using a Default Parameter of 6
function rollDie2(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

//Another example
function greet(msg, person, punc = "!") {
    console.log(`${msg} ${person} ${punc}`)
}