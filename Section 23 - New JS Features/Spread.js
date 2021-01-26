//Spread is kind of like a Swiss Army Knife

//Spread in Function Calls
//Math.max (13, 4, 5, 21, 3, 1, 2, 7, 6, 4, 2, 53456) --> 53456
//Math.min(13, 4, 5, 21, 3, 1, 2, 7, 6, 4, 2, 53456) --> 1
nums = [13, 4, 5, 21, 3, 1, 2, 7, 6, 4, 2, 53456]

//Math.max(nums) --> NaN
//Getting the max number out of an array using Spread
Math.max(...nums) //The ... is the Spread syntax

//Other commands we can use Spread with:
console.log(...nums)

console.log(..."Hello") //The spread will pass in each letter to console.log

// ----------------------------------------------------------------------------------------

//Spread with Array Literals

const cats = ["Ella", "Meowth", "Luna"];
const dogs = ["Rusty", "Wyatt"];

//Copying over all values from both arrays into a new one (spreading an array into another)
const allPets = [...cats, ...dogs, "Speedy"]

// ----------------------------------------------------------------------------------------

//Spread with Objects

//We can copy properties from an object into a new object
const feline = {legs: 4, family: "Felidae"}
const canine = {isFurry: true, family: "Caninae"}

//The past property copied over will win, so in this example "family:" will hold the value "Caninae" (order matters)
const catDog = {...feline, ...canine}

///If you try to spread an array into an object, the indexes will be the new key value pair (same thing happens with a String)
//{...[2, 4, 6, 8]}
//Returns {0: 2, 1: 4, 2: 6, 3: 8}


//Example: A user signs up for an account and we want to add in data to the object from the form
const dataFromForm = {
    email: "testemail@website.com",
    password: "password1234",
    username: "testuser"
}

const newUser = {...dataFromForm, id: 97,  isAdmin: false}