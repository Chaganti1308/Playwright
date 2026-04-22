
let fruits = ['apple','kiwi','banana','watermelon','grapes','orange'];

// sort() -- sorts the array
console.log(fruits.sort()); // sorts in place and returns the sorted array      

// 
console.log((fruits.sort()).reverse());
// sorts in place and returns the sorted array in reverse order

let nums = [10,2,13,12,20];
// [ten,two,thirteen,twelve,twenty]
console.log(nums);
nums.sort((a,b) => a - b); // Ascending order
console.log("Array in ascending order :",nums);
nums.sort((a,b) => b - a); // descending order
console.log("Array in ascending order :",nums);
