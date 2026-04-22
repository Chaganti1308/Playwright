// increment(++) and decrement(--) operators
/**
 * ++a // pre-increment: increments a, then returns a
 * a++ // post-increment: returns a, then increments a
 * --a // pre-decrement: decrements a, then returns a
 * a-- // post-decrement: returns a, then decrements a
 */

let a = 5;
let b = a++; // Output: 5 First assigns the variable b and then increments a
let c = ++a; // Output: 6 First increments a and then assigns the value to c
console.log(a); // Output: 7 (a has been incremented)
console.log(b); // Output: 5 (b has the original value of a)
console.log(c); // Output: 6 (c has the incremented value of a)

/**
 * a = 5 -> a = 6 -> a = 7
 * b = a++ ==> b = 5, a = 6 -- first assigns and then increments
 * c = ++a ==> c = 7, a = 7 -- first increments and then assigns
 */