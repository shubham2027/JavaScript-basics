const marvel_hero = ["thor" , "ironman" , "spiderman" ]
const dc_hero = ["superman" , "flash" , "batman" ]


//concat and spread operator
// const all_heroes = marvel_hero.concat(dc_hero); 

// console.log(all_heroes);

// const new_heroes = [ ...marvel_hero, ...dc_hero]; // spread operator

// console.log(new_heroes);


const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

const realArray = arr.flat(Infinity); // here flat breaks all the array elements into one single array and here inside flat() we have to give the depth till which we want to flat the array 

console.log(realArray);

console.log(Array.isArray("hecker"));// return bool // false in this case
console.log(Array.from("hecker")); // make an array of [h,e,c,k,e,r]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));