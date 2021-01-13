// Password must be 6+ characters
// Password cannot include a space


// Non-Nested
// const password = prompt("Please enter a new password")

// if (password.length >= 6) {
//     console.log("The password is long enough!")
// } else {
//     console.log("Password must be 6+ characters in length!")
// }

// if (password.indexOf(" ") === -1) {
//     console.log("No space in password, good job!")
// } else {
//     console.log("Password cannot contain spaces!")
// }

//Nested
const password = prompt("Please enter a new password")

//Password must be 6+ characters
if (password.length >= 6) {
    //Password cannot include spaces
    if (password.indexOf(" ") === -1) {
        console.log("Valid password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Password must be 6+ characters in length!")
}

