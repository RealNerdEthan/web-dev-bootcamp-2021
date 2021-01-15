for (let i = 1; i <= 10; i++) { //This is the outer Loop
    console.log(`i is: ${i}`)
    for (let j = 1; j <= 3; j++) {
       console.log(`     j is: ${j}`) //This is the inner loop and runs every time 1 instance of 'i' runs (and the spaces are just to illustrate this in the console.log)
    }
}


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row: ${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}