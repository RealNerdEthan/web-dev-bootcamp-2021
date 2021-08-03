//With this, we've made our own method that we can use on every single string
String.prototype.yell = function(){
    return `Wow!! ${this.toUpperCase()}!! Ahh!!!`
};

//This is an example of overriding an existing method, in this cap .pop
Array.prototype.pop = function(){
    return "Sorry, I can't do that right now..."
}