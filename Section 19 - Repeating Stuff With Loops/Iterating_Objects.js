//Iterating Objects is not nearly as common as iterating over arrays but here is how to do it
const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

//The For In loop is old but allows you to iterate over objects
for (let person in testScores) {
    console.log(`${person} scored: ${testScores[person]}`);
}

//Using the Object.values method and summing them, then getting an average
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log("Total test takers:", scores.length);
console.log("Average score:", total /scores.length);