const playerOneButton = document.querySelector('#p1');
const playerTwoButton = document.querySelector('#p2');
const resetButton = document.querySelector('#reset');
const playerOneDisplay = document.querySelector('#p1Score');
const playerTwoDisplay = document.querySelector('#p2Score');
const roundLimitSelector = document.querySelector('#playToAmount')

let playerOneScore = 0;
let playerTwoScore = 0;
let roundLimit = 6;

roundLimitSelector.addEventListener('change', function(){
    roundLimit = parseInt(this.value);
    //reset();
})

playerOneButton.addEventListener('click', function(){
    //add 1 to first number
    //check if first nunber = playing to number, then change first number color to green and second number color to red and disable both buttons
    if (playerOneScore != roundLimit){
        playerOneScore += 1;
        playerOneDisplay.textContent = playerOneScore;
    } else if (playerOneScore === roundLimit){
        playerOneDisplay.style.color = 'green';
        playerTwoDisplay.style.color = 'red';
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
    }
})

playerTwoButton.addEventListener('click', function(){
    //add 1 to second number
    //check if second number = playing to number, then change first number to red and second number to green and disable both buttons
    if (playerTwoScore != roundLimit){
        playerTwoScore += 1;
        playerTwoDisplay.textContent = playerTwoScore;
    } else if (playerTwoScore === roundLimit){
        playerOneDisplay.style.color = 'red';
        playerTwoDisplay.style.color = 'green';
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
    }
})


resetButton.addEventListener('click', function(){
    playerOneDisplay.textContent = 0;
    playerTwoDisplay.textContent = 0;
    playerOneDisplay.style.color = 'black';
    playerTwoDisplay.style.color = 'black';
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
});