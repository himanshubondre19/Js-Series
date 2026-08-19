const accountId = 930020 // there will be only one way to declare constant 
let accountEmail = "himanshu.bondre19@gmail.com"
var accountPassword = "Sakshi@14"
accountCity = "Raipur"
let accountState ;

// accountId = 2 // not allowed because constant cannot be changed
accountEmail = "sakshi14@gmail.com"
accountPassword ="Palak@04"
accountCity = "Kumhari"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* 
Prefer not to var
because of issue in block scope and functional scope
*/