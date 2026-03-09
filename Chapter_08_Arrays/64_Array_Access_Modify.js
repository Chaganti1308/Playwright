// Array accessing and modify

//['Pass','Fail','Skip']
//[0,1,2] -- indexing
//[-3,-2,-1] -- backward indexing

let statuses = ['Pass','Fail','Skip'];
console.log(statuses);

console.log(statuses[0]);
console.log(statuses[2]);

// returns value at index 1
console.log(statuses.at(1));
console.log(statuses.at(-2));

// Modify
statuses[1] = "blocked";
console.log(statuses);
console.log(statuses.length);
