console.log("2" > 6);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* The reason is that equality check == and 
comparison > , < , >= , <= work differently 
comparisons convert null to a number treating it as 0
That's why (4) null >= 0 is true and (2) null>0 is false
*/

/* line(3) This one is important because it looks like it should be true.

With loose equality (==), JavaScript has a special rule for null:

null == undefined  → true
null == 0          → false
null == false      → false
null == ""         → false

*/
console.log("2" == 2);
console.log("2" === 2);

// (13) is false because === operator checks both the operands strictly whether both the operand is of same type or not 