const name = "hecker"
const repoCount = 15

// ` ` -> these double backticks are called string interpolation modern usage for printing statement as demonstrated below

console.log(` Hello my name is ${name} and my repo count is ${repoCount} `);

//another way of using strings

const name2 =  new String("hecker-hecking"); // passed as object 

// console.log(name2);

// console.log(name2[0]);

// console.log(name2.__proto__); //gives object 

// console.log(name2.length);
// console.log(name2.toUpperCase());
// console.log(name2.charAt(2));
// console.log(name2.indexOf('k'));

// const newString = name2.substring(0, 4)

// console.log(newString);

// const anotherString = name2.slice(-12, 6);
// console.log(`here is the anotherString: ${anotherString}`);

const name3 = "  hecker.   "

console.log(name3);
console.log(name3.trim());


const url = "https://hecker.com/hecker%20singh"

console.log(url.replace("%20", "-"));
console.log(url.includes("hecker"));

console.log(name2.split("-"));



 
