//Using an arow function, the browser is waiting 3 seconds before executing the code
setTimeout(() =>{
    console.log("Hello!")
}, 3000)

//Another example
console.log("Hello!")
setTimeout(() =>{
    console.log("Are you still there?")
}, 5000)

//setInterval allows us to repeat (again using an arrow function)
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

//running the command clearInterval(id) in the console will let us stop the interval from running