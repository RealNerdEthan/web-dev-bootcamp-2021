const hellobtn = document.querySelector('#hello');
const goodbyebtn = document.querySelector('#goodbye');

hellobtn.addEventListener('click', function () {
    console.log('hello');
});

goodbyebtn.addEventListener('click', function () {
    console.log('goodbye');
});