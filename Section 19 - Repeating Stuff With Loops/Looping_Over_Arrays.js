const animals = [
    "Cat",
    "Dog",
    "Hampster",
    "Fish",
    "Rat",
    "Snake",
    "Turtle",
    "Lizard",
    "Salamander"
]

//Prints out index and value for the array in console.log
for(let i = 0; i < animals.length; i ++) {
    console.log(i, animals[i])
}

//Reversing the print out of the array
for(let i = animals.length - 1; i >= 0; i --) {
    console.log(i, animals[i])
}