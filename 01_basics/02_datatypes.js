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

// const a = 123
// const b = "abc"
// let userEmail
// const c = 10.32


// symbol also returns another datatype which is unique 
// const id1 = Symbol('123')
// const id2 = Symbol('123')

// console.log(id1 === id2);


// Reference Type (Non primitive)

// array, objects, functions

// const heroes = ["shaktimaan", "naagraj","doga"]

// let myobj = {
//     name: "hecker",
//     age: "22"
// }

// const myFunction = function(){
//     console.log("Hello World!");
    
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) when shared like in name1 and name2 copy is made and assigned  ,

// Heap (Non-Primitive) when shared like user1 and user2 they share same memory space pointing to same address

let name1 = "hecker"

let name2 = name1
name2 = "another hecker"


console.log(name1);
console.log(name2);


let user1 = {
    email: "user1@gmail.com",
    upi: "user1@ybl"
}

let user2 = user1;

user2.email = "user2@gmail.com" //change happens to user1 also
console.log(user1);
console.log(user2);
