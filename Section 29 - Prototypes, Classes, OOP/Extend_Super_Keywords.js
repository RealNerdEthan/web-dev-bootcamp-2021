//This code shows an example of inheritance between the functions 

//Pet is a Super class
class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating!`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9){
        //Super allows us to call the constructor in the Super Function called Pet
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'MEOWWW!!'
    }
}

class Dog extends Pet {
    bark(){
        return 'WOOOF!!'
    }
    //Dog having it's own Eat method means it will not look for Eat in the Pet function becuase it already found one in the Dog function
    eat(){
        return `${this.name} scarfs their food!`
    }
}