// number => 2 to power 53
// bigint
// string
// boolean
// null => standalone value and also an object when checked
// undefined 
// symbol => unique

// console.log(typeof "hecker"); //string

// console.log(typeof null) //gives object

// console.log(typeof undefined); //gives undefined



// Primitive datatypes

    //these all are call by value
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const a = 123
const b = "abc"
let userEmail
const c = 10.32


// symbol also returns another datatype which is unique 
const id1 = Symbol('123')
const id2 = Symbol('123')

console.log(id1 === id2);


// Reference Type (Non primitive)

// array, objects, functions

const heroes = ["shaktimaan", "naagraj","doga"]

let myobj = {
    name: "hecker",
    age: "22"
}

const myFunction = function(){
    console.log("Hello World!");
    
}


