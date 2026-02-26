let a = 5;
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++; //7+9+10+11+12

console.log(a);
console.log(b);
console.log(c);

/**
 * a = 5/6/7/9/10/11/12;
 * b = 5 + 7 = 12;
 * c = 7 + 9 + 10+ 11+11
 * 
 * a++ + ++a + ++a + ++a + a++;
 * 7   + 9   + 10 + 11 + 11 
 */


