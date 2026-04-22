// logical operators: &&, ||, !
let a = 10;
let b = 20;
let c = 30; 
// AND operator (&&) -- returns true if both operands are true
// OR operator (||) -- returns true if at least one operand is true
// NOT operator (!) -- returns true if the operand is false

console.log(a > 15 && c > 35); // false
console.log(a > 5 && c > 25); // true
console.log(a > 15 || c > 35); // false
console.log(a > 5 || c > 35); // true
console.log(!(a > 15)); // true
console.log(!(a > 5)); // false     
console.log(b < 25 && c > 25);  // true
console.log(b < 25 || c < 25);  // true
console.log(!(b < 25));

let x = true;
let y = false;  
console.log(x && y); // false
console.log(x || y); // true
console.log(!x); // false
console.log(!y); // true    