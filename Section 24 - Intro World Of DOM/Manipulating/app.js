const allImages = document.getElementsByTagName("img");

for(let img of allImages) {
    img.scr = "https://static.wikia.nocookie.net/zoids/images/a/a5/LOLOL_Liger_Zero.jpg/revision/latest/scale-to-width-down/340?cb=20080708203734"
}


const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
