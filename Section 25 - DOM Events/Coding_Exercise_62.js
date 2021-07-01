const welcomeUser = document.querySelector('#username');
const h1 = document.querySelector('h1');

welcomeUser.addEventListener('input', function(event){
    h1.innerText = `Welcome, ${welcomeUser.value}`;
    if (!welcomeUser.value) {
        h1.innerText = 'Enter Your Username';
    }
})