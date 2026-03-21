console.log(0 == ""); // true
console.log(0 == "0"); // true
console.log(0 == false); // true
console.log(null == undefined); // true
console.log("\t\n" == 0); // true

// rule breakers
console.log(null == 0); // false
console.log(null == ""); // false
console.log(null == false); // false
console.log(undefined == 0); // false
console.log(undefined == ""); // false
console.log(undefined == false); // false
console.log(NaN == NaN); // false

console.log("" === false); // false
console.log("" == false); // false
