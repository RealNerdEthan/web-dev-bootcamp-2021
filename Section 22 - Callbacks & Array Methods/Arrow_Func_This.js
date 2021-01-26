//"This" behaves differently inside an Arrow Function than it does inside a normal Function

//This example works
// const person = {
//     firstName: "Ethan",
//     lastName: "Goddard",
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

//This example doesn't work
// const person = {
//     firstName: "Ethan",
//     lastName: "Goddard",
//     fullName: () => {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


//Add a delay
const person = {
    firstName: "Ethan",
    lastName: "Goddard",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000)
    }
}