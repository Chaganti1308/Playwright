const { log } = require("node:console");

let fruits = ['apple','kiwi','banana','watermelon','grapes','orange'];

// sort() -- sorts the array
console.log(fruits.sort()); // sorts in place and returns the sorted array      

// 
console.log((fruits.sort()).reverse()); // sorts in place and returns the sorted array in reverse order