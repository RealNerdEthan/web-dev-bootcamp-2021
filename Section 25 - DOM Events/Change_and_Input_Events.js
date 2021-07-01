const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('change', function(event){
    console.log('Change Event')
})

input.addEventListener('input', function(event){
    console.log('Input Event')
    h1.innerText = input.value;
})