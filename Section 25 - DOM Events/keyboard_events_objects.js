//Getting object info when clicking button. Can be used on animations/games
document.querySelector('button').addEventListener('click', function(event){
    console.log(event)
})

//Key Down and Up events
const inputDownUp = document.querySelector('#keyDownUp');
inputDownUp.addEventListener('keydown', function(){
    console.log('Key down!')
})

inputDownUp.addEventListener('keyup', function(){
    console.log('Key up!')
})

//Getting the exact key's name you have pressed via an event
const inputName = document.querySelector('#keyName');
inputName.addEventListener('keydown', function(event){
    console.log(event.key)
    console.log(event.code)
})

//If we want to look for a key press anywhere on the screen, not only in an input
window.addEventListener('keydown', function(event){
    //console.log(event.code)
    //The switch statment allows us to accept only certain keys (could also be accomplished with else if conditional statement)
    switch(event.code){
        case 'ArrowUp':
            console.log('Up!');
            break;
        case 'ArrowDown':
            console.log('Down!');
            break;
        case 'ArrowRight':
            console.log('Right!');
            break;
        case 'ArrowLeft':
            console.log('Left!');
            break;
        default:
            console.log('Not Accepted')    
    }
})