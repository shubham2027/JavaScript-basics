// Arrays

// const arr = [23, 'hecker', true]

// const arr = new Array(0, 1, 3, 65)

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr1[1]);

// Array methods 

// arr.push(100); // added at last
// arr.pop(); // last popped

// arr.unshift(123)
// arr.indexOf(123);

// console.log(arr.indexOf(999));
// console.log(arr.includes(999));

// console.log(arr);


// let arr1 =  arr.join();
// console.log(typeof arr1); //converts array to string




// slice, spice

let arr = [0, 1, 2, 3, 4, 5 ];

console.log("A ", arr);

const slicedArray = arr.slice(1, 3); // gives  the value from 1 to 2 from array 

const splicedArray = arr.splice(1, 3); // removes the values from 1 to 3 from the array


console.log(slicedArray);
console.log(splicedArray);
console.log("Original array after operations: ",arr);
