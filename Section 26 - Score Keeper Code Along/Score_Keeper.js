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
})

playerOneButton.addEventListener('click', function(){
    playerOneScore += 1;
    playerOneDisplay.textContent = playerOneScore;
    if (playerOneScore === roundLimit){
        playerOneDisplay.style.color = 'green';
        playerTwoDisplay.style.color = 'red';
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
    }
})

playerTwoButton.addEventListener('click', function(){
    playerTwoScore += 1;
    playerTwoDisplay.textContent = playerTwoScore;
    if (playerTwoScore === roundLimit){
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