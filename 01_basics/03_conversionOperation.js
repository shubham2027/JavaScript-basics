// let score1 = "33";
// let score2 = "33abc"
// console.log(typeof score1);
// console.log(typeof(score1));

// let valueInNumber1 = Number(score1)
// let valueInNumber2 = Number(score2)
// console.log("value in Number: " , valueInNumber);
// console.log(typeof(valueInNumber1));
// console.log(valueInNumber1);

// console.log(typeof(valueInNumber2));
// console.log(valueInNumber2); //gives NaN bcoz  "33abc" is also converted into number but it is not a number now after conversion

/* conversion of all datatypes except only number results NaN with a few exception like 
  null -> 0
  true -> 1 \\ false -> 0  
*/

// **************************** Operations ***********************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 3);


// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(true); //gets true
// console.log(+true); //gets 1

let gameCounter = 100
gameCounter++
console.log(gameCounter);
