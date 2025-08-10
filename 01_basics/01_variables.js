const accountId = 144325 //not mutable

var accountEmail = "hecker@gmail.com" //mutable
let accountPassword = "123456" //mutable
accountCity = "Patna" //mutable
let accountState //for now undefined


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
we generally not use var because of the issue in block scope and functional scope
*/