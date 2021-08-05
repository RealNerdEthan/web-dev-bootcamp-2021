//This is a constructor function
// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// //RGB method defined on the Prototype
// Color.prototype.rgb = function(){
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

// //HEX method defined on the Prototype
// Color.prototype.hex = function(){
//     const {r,g,b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// //RGBA method defined on the Prototype
// Color.prototype.rgba = function(a=1.0){
//     const {r,g,b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// const color1 = new Color(40, 255, 60);
// const color2 = new Color(0, 0, 0);


//This is how you rewrite the above constructor function(s) as a JavaScript class to simply look nicer
class Color {
    //The constructor defines the class or 'pattern' for every color in this example
    constructor(r,g,b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = name;
    }
    greet(){
        return `Hello from ${this.colorName}!`;
    }
    //InnerRGB is it's own method so it can be called by both rgb and rgba methods
    innerRGB(){
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`;
    }
    //Using this.innerRGB is an example of calling a method inside of another method
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    //Again here using this.innerRGB is an example of calling a method inside of another method
    rgba(a=1.0){
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex(){
        const {r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');