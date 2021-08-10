//This is written to be included in another file and must be explictily exported

//One way to export
// const add = (x, y) => x + y;
// const pi = 3.14159;
// const square = x => x * x;

// module.exports.add = add;
// module.exports.pi = pi;
// module.exports.square = square;

//----------------------------------

//Another way to export
// const add = (x, y) => x + y;
// const pi = 3.14159;
// const square = x => x * x;

// const math = {
//     add: add,
//     pi: pi,
//     square: square
// }

// module.exports = math;

//----------------------------------

//Another way to export
module.exports.add = (x, y) => x + y;
module.exports.pi = 3.14159;
module.exports.square = x => x * x;
