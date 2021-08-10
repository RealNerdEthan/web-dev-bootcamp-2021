//We named this file index.js becuase that's the name Node will look for when importing an entire directory

const ella = require('./ella');
const meowth = require('./meowth');
const pistol = require('./pistol');

const allCats = [ella, meowth, pistol];

module.exports = allCats;