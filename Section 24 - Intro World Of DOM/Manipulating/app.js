const allImages = document.getElementsByTagName("img");

for(let img of allImages) {
    img.scr = "https://static.wikia.nocookie.net/zoids/images/a/a5/LOLOL_Liger_Zero.jpg/revision/latest/scale-to-width-down/340?cb=20080708203734"
}



//innerText shows text but is sensitive to what is being displayed
//document.querySelector('h1').innerText
//textContent shows all text, even if hidden
//document.querySelector('h1').innerHTML = <i>NEW_TEXT_IS_NOT_ITALICIZED</i>
//innerHTML shows all text and markup
//document.querySelector('h1').innerHTML = <i>NEW_TEXT_IS_ITALICIZED</i>

//You can also do a += to add to current element
//Example: document.querySelector('h1').innerHTML += '<sup>THIS_ADDS_SUPERSCRIPT</sup>'

//MANIPULATING ATTRIBUTES PRACTICE
//document.querySelector('img').src = 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg';
//document.querySelector('img').alt = 'chicken';


const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}