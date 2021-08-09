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

calcHSL(){
    let{r,g,b} = this;
    //Make r,g,b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    //Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
    cmax = Math.max(r,g,b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;
    if(delta == 0) h = 0;
    else if(cmax == r)
        //Red is max
        h = ((g - b) / dleta) % 6;
    else if(cmax == g)
        //Green is max
        h = (b - r) / delta + 2;
    else
        //Blue is max
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    //Make negitive hues positive behind 360degrees
    if (h < 0) h += 360;
    //Calculate lightness
    l = (cmax + cmin) / 2;

    //Calculate saturation
    s = delata == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    //Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
}