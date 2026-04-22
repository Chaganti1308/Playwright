// Assignment Operator -- used to assign values to variables

let x = 10;
let y = 20;

console.log(x); // Output: 10
console.log(y); // Output: 20

let z = x + y;
console.log(z);

x += 5; // Equals to x = x + 5
y -= 10; // Equals to y = y - 10
console.log(x); // Output: 15
console.log(y); // Output: 10

x *= 2; //Equals to x = x * 2
y /= 2; //Equals to y = y / 2
console.log(x); // Output: 30
console.log(y); // Output: 5

x %= 5; // Equals to x = x % 5
y **= 3; // Equals to y = y ** 3
console.log(x); // Output: 0 (30 divided by 5 leaves a remainder of 0)
console.log(y); // Output: 125 (5 raised to the power of 3 is 125)  