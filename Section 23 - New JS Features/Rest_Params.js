//Rest syntax of "..." goes in the parameter list
function sum(...nums){ //<--the ... collects the Rest of the parameters passed in
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Gold medal goes to: ${silver}`)
    console.log(`And thanks to: ${everyoneElse}`)
}

//Rest argument object doesn't work in Function Arrows at all