//This is how you pass a function as an argument into another function

//A function that takes a passed in fucntion and runs it twice
function callTwice(func) {
    func();
    func();
}

//This is the passed in fucntion example
function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

//This runs the callTwice function with the input of the rollDie function
callTwice(rollDie)


//This is another example but run the passed in function 10 times
function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

//This runs the callTenTimes function with the input of the rollDie function
callTenTimes(rollDie)