const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const userInput = process.argv[2];
const languageCode = franc(userInput);

try{
    console.log(langs.where("3", languageCode).name.green);
} catch(error)
{
    console.log('Error! Please supply more text and try again!'.red)
}