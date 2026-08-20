let score = "33abc"
let love = null

console.log(typeof score);
console.log(typeof (score)); // we also declare the variable inside the parenthesis

let valueNumber = Number(score)
let valueNumber1 = Number(love)

console.log(typeof valueNumber);
console.log(typeof valueNumber1);

console.log(valueNumber)
console.log(valueNumber1) 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// this print NaN because valueNumber conveet the score into number but the string is "33abc"
//"33" -> converted into number
// 1 = true and 2 = false
// "" = true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
