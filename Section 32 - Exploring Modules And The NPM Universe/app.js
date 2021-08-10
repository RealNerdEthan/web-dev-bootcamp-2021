//Below is an example of using require to get information from another file in this same directory (can be changes by supplying file path)
const math = require('./math');
console.log('This is required from a file!')
console.log(math);
console.log(math.add(2,4));
console.log(math.pi);
console.log(math.square(9));

//This is an example of requring an entire directory
const cats = require('./shelter');
console.log('This is required from an entire directory!', cats);