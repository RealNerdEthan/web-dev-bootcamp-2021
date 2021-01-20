//Every method is a function, but not all functions are a method
//A method is a Function that has been added as a property on an object
//Math. is a perfect example of how it has manny methods and that all of them are actually pre-written functions

//Here's an exaple of creating our own Math function
const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num * num * num
    }
}


//Here is the shortand version (which is new to JS)
const myMath2 = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

//Exercise 45: Methods
const square = {
    area(num) {
        return num * num; //returns a number squared
    },
    perimeter(num) {
        return num * 4; //returns a number multiplied by 4
    }
};