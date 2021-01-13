const dayOfWeek = prompt("Enter a day of the week:").toLowerCase();

if (dayOfWeek === "monday") {
    console.log("Ugh I hate Mondays!")
} else if (dayOfWeek === "tuesday") {
    console.log("Not much better.")
} else if (dayOfWeek === "wednesday") {
    console.log("Hump day!")
} else if (dayOfWeek === "thursday") {
    console.log("Getting there.")
}  else if (dayOfWeek === "friday") {
    console.log("Fridays are decent, especially after work!")
} else if (dayOfWeek === "saturday") {
    console.log("Yay I love Saturdays!") 
} else if (dayOfWeek === "sunday") {
    console.log("It's the final countdown!")
} else {
    console.log("That is not a valid day...")
}

//Else if a catch all for any other possible inputs, but it's not required