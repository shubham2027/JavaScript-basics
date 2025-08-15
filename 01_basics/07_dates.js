// Dates

let myDate = new Date(); 

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof(myDate)); //object
// 
// let newDate = new Date(2025, 0, 23); // dates start from 0 in js when given input in number
// console.log(newDate.toString());

// let d1 = new Date(2025, 15, 8, 5, 3);
// console.log(d1.toLocaleString());

// let d2 = new Date("2025-01-25"); // here if the input date is given in YYYY-MM-DD then it starts from 1

// console.log(d2.toLocaleString());



// ********************** Time-Stamp ********************************

let stamp = Date.now(); // same as new date()
console.log(stamp);

console.log(Math.floor(Date.now() / 1000)); // time stamp given in seconds




// In toLocaleString() we can customise the ouput / format of the date 
stamp.toLocaleString('default', {
    weekday: "long",

});  


