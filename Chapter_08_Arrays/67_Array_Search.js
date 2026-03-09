let results = ['pass','fail','pass','fail','error'];

// indexOf() -- return the first matched index
console.log(results.indexOf('Fail')); //-1
console.log(results.indexOf('error'));

//lastIndexOf() -- returns last index matches
console.log(results.lastIndexOf('fail'));

// includes() - 
console.log(results.includes('error'));

// find() -- first matching element
let nums = [10,20,30,40,50];

// find() - find first number which are greater than 20
console.log(nums.find(x => x > 20));

// findIndex() - finds the index of element
console.log(nums.findIndex(x => x > 30));

//findLastIndex() -- finds the index of lastelement
console.log(nums.findLastIndex(x => x > 30));

