//This is the old way of getting a random number from 1-6, six times
let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let die3 = Math.floor(Math.random() * 6) + 1;
let die4 = Math.floor(Math.random() * 6) + 1;
let die5 = Math.floor(Math.random() * 6) + 1;
let die6 = Math.floor(Math.random() * 6) + 1;

//We want to create some code with a function that look like this and lets you pass in a dice size value
let die7 = rollDie(20);
let die8 = rollDie(12);
//and etc..