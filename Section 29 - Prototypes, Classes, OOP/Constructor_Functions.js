//This function makes and returns an object every time it's called
//The resulting objects all follow the same "recipe"
function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function(){
        const {r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex();
firstColor.rgb();

const black = makeColor(0, 0, 0);
black.rgb();
black.hex();

//--------------------------------------------------------------------------------

// The NEW operator
// 1. Creates a blank, plain Javascript object;
// 2. Links(sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the 'this' context;
// 4. Returns 'this' if the function doesn't return its own object
// 'this' will behave differently than normal

//This is a constructor function
function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

//RGB method defined on the Prototype
Color.prototype.rgb = function(){
    const {r,g,b} = this;
    return `rgb(${r}, ${g}, ${b})`;
};

//HEX method defined on the Prototype
Color.prototype.hex = function(){
    const {r,g,b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

//RGBA method defined on the Prototype
Color.prototype.rgba = function(a=1.0){
    const {r,g,b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new Color(40, 255, 60);
const color2 = new Color(0, 0, 0);