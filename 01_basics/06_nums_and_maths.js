// const score = 400
// console.log(score);


// const balance = new Number(100)
// console.log(balance);
// console.log(typeof(balance.toString())); // converted to string 
// console.log(balance.toFixed(2));



// const number = 123.8654
// console.log(number.toPrecision(3));


// const a = 1000000
// console.log(a.toLocaleString('en-IN')); // indian standards
// console.log(a.toLocaleString()); // international standards


// +++++++++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-400)); // changes the value to positive (absolute value) like mod
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 8, 10, 0));
// console.log(Math.max(4, 3, 8, 10, 0));


console.log(Math.random()); // gives random b/w 0 and 1 always
console.log( (Math.random() * 10 ) + 1); // for avoiding 0 and min will be 1

const min  = 10
const max  = 20


console.log(Math.floor(Math.random() * (max - min + 1 ) + min));
