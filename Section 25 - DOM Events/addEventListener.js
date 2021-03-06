//Setting our button variable to select all elements with the #v2 tag
const btn = document.querySelector('#v2');

//All in one button and function with no name
btn.onclick = function () {
    console.log('You clicked me!');
    console.log('I hope it worked!')
}


//This will have the function with name of scream and btn code seperated so you can resuse the function scream
function scream() {
    console.log('AAAAAAHHHHHH!');
    console.log('STOP TOUCHING ME!!!')
}

btn.onmouseenter = scream;

//Adding an event to a different element
document.querySelector('h1').onclick = function () {
    alert('You click the H1!')
}

//The best way to do this is via addEventListener as shown below
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert('You have clicked v3!')
})

//You can also pass in a previously defined function
//const btn3 = document.querySelector('#v3');
//btn3.addEventListener('click', scream)