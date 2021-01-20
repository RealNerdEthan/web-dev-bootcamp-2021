//"This" is a special keyword, which is typically use inside of an object inside a method
const cat = {
    name: "Ella",
    color: "white",
    breed: "tuxedo",
    meow(){
        console.log("MEOW MEOW MEOW");
        console.log(this.color); //This allows us to access properties of the object "cat", in this case it's "color"
        console.log(`${this.name} says MEOW!`); //Again we're accessing properties of the current object "cat"
    }
}

//However, "This" doesn't always access properties within the object. It depends on how we call the function
//Here's an example:
const meow2 = cat.meow;
//If we try to call meow2() (mising the cat.) it will not be able to access the "cat" object and grab the "color" property

//SIDE NOTE: Everything we're calling is actually in the "Window" object. Example: Window.Math.random()


//Exercise 46: Egg Laying Increment with "This"
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(){
        this.eggCount ++;
        return "EGG";
    }
  };