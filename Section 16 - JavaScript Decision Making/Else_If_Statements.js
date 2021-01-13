const dayOfWeek = "Friday";

if (dayOfWeek === "Monday") {
    console.log("Ugh I hate Mondays!")
} else if (dayOfWeek === "Saturday") {
    console.log("Yay I love Saturdays!")
} else if (dayOfWeek === "Friday") {
    console.log("Fridays are decent, especially after work!")
}

// 0-5 Free
// 6-10 Child $10
// 11-65 Adult $20
// 66+ Senior $10

const age = 66;

if (age < 5) {
    console.log("You are smol, meal is free of charge.")
} else if (age < 11) {
    console.log("You are a child, meal is $10.")
} else if (age <66) {
    console.log("You are an adult, meal is $20.")
} else if (age >= 66) {
    console.log("You are a senior, meal is $10.")
}