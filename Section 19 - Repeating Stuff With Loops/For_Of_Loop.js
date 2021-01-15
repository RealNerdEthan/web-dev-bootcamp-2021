const subreddits = ["learnprogramming", "starcitizen", "aww", "tuckedinkitties", "todayilearned", "stardewvalley", "pokemon", "seashanties"]

//This is an example of the typical 'For' loop
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

//This is the For Of loop that does the same thing. They are great for iderating over arrays, but doesn't keep track of or display the index value for these from the array
for(let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}



//Example of Nested For Loops
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

//The Nested For Loop example. Again doesn't keep track of the index
for (let row of seatingChart){
    for (let student of row) {
        console.log(student);
    }
}


//Iderable Object example (string)
for (let character of "Hello World") {
    console.log(character)
}