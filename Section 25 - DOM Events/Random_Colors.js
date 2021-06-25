const btn = document.querySelector('button');
const numbers = document.querySelector('h1');

const makeRandomColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}

btn.addEventListener('click', function () {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    numbers.innerText = newColor;
})