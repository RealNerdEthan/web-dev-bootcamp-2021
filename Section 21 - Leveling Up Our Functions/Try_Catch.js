//Try/Catch are two statments that catch erros and stop exucution of the code

//Deliberte Error
try {
    hello.toUpperCase();
} catch {
    console.log("Error!") //Catch will only run if there's an error found
}

console.log("After the try/catch has run") //This is proof that the rest of my code runs despite the error


//Here's an example of a function with try/catch
function yell(msg){
    try { 
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        //console.log(e); this is used if you want to print the error in the console
        console.log("Please pass a string next time!");
    }
}