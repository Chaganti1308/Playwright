// Transform -- reduce the size of array or increase the array

let scores = [45,82,91,60,73];

// map() -- transforms every element and returns new array
let grades = scores.map(s => s>70 ? "Pass":"Fail");
console.log(grades);


// filters() -- keeps the pass elements only
let grade = scores.filter(s => s>70);
console.log(grade);

// reduce() -- into a single value
let total = scores.reduce((sum,s)=> sum + s,0);
console.log(total);


let nested = [[1,2],[3,4],[5]];
console.log(nested.flat());