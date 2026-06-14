// Arrays in one shot

const { log } = require("node:console");
const { loadavg } = require("node:os");
const { skip } = require("node:test");

// empty array creation
let arr = [];

// number array 
let num_array = [10,20,30,40,50,60,70,80,90];
console.log('Number Array : ',num_array);

// string array
let str_array = ['str1','str2','str3','str4','str5'];
console.log('String Array : ',str_array);

// mixed array
let mixed_array = [10,'string1',30,'string2',50,null,'true'];
console.log('Mixed Array : ',mixed_array);

// create empty array
let emptyArray = new Array(3);
console.log('Empty Array : ',emptyArray);

// push()-- add/remove elements from last of array
// pop() -- remove elements from last of array
let pushedEle = num_array.push(100);
console.log('Pushed Element is :', pushedEle ,'----',' Array after push : ',num_array);

let poppedEle = num_array.pop();
console.log('Pooped Element is : ', poppedEle ,'----', " Array after pop : ", num_array);

// Extracting elements using indexing
console.log(num_array[5]);
console.log(str_array[3]);

// Array constructor
let arrayConstructor = new Array(1,2,3,4,5);
console.log('Array Constructor :', arrayConstructor);

// using array.of()
let arrayOf = Array.of(12,34,56,78,90);
console.log('Array using Array of : ', arrayOf);

// modifying array
let statusArray = ['pass','fail','stop','skip','break'];
console.log(statusArray[2]);
console.log('Original status array : ', statusArray);

statusArray[4] = 'switch';
console.log('Modified Array : ', statusArray);

// unshift() , shift() -- Add/remove elements at start of array
console.log(num_array.unshift(0));
console.log('Array after unshift :',num_array);

console.log(num_array.shift());
console.log('Array after shift :',num_array);

// slice() -- removes the elements & give a sub array from original array 
// splice -- Removes and replaces the elements

console.log('Original Array : ',str_array);
console.log(str_array.slice(1,3));
console.log(str_array);
console.log(str_array.splice(2,3,'str30','str40','str50','str60'));
console.log('Spliced Array : ', str_array);


// Ex
let browsers = ['chrome','opera','edge','safari','firefox'];
console.log('Browsers length :', browsers.length);
console.log('--------------------------------');
console.log(browsers.pop());
console.log('--------------------------------');
console.log(browsers);
console.log('--------------------------------');
console.log(browsers.shift());
console.log(browsers);


// indexOf () - returns first matched index
let res = ['pass','fail','skip','pass','fail','drop'];
console.log("results Array : ",res);

console.log(res.indexOf('skip'));
console.log(res.indexOf('pass'));
console.log(res.indexOf('drop'));

// includes() -- returns true or false
console.log(res.includes('drop'));
console.log(res.includes('exit'));

// find() -- returns matching element
let nums = [10,20,30,40,50];
console.log(nums.find(x => x > 20));

// findIndex() -- returns the index of first matching element
console.log(nums.findIndex(x => x === 30));

// findLast() -- last matched element
console.log(nums.findLast(x => x > 0));

// findLastIndex() -- returns the last index
console.log(nums.findLastIndex(x => x > 0));

// Array iteration

let tests = ['login','add','search','checkout','logout'];

// for 
console.log("..........Using for loop..........");
for(let i = 0; i < tests.length ; i++){
    console.log(tests[i]);
    
}

// for...of
console.log("...........Using for of loop..........");

for (let test of tests){
    console.log(test);
    
}

// forEach
console.log("..........Using For each..........");
tests.forEach((test,index) => 
{
    console.log(`${index} -- ${test}`);
    
});

// for...in 
console.log("..........Using for in ...........");
for(let test in tests){
    console.log(`${test} -- ${tests[test]}`);
    
}

// entries() -- index + value
console.log("..........Using Entries..........");
for(let [i,test] of tests.entries()){
    console.log(i,test);
    
}


// Array transformation
// map() , filter(), reduce()
let scores = [89,78,95,79,96,90];

// map() -- returns new array
let grades = scores.map(x => x >= 90 ? 'Excellent' : 'Good');
console.log(scores);
console.log(grades);

// filter() -- retuns modified array from original array
let excellentGrades = scores.filter(score => score >= 90);
console.log(excellentGrades);

// reduce() -- aggregate of total array, accumulate to single value
// initially sum value is declared as O

let sumOfScores = scores.reduce((sum,s) => sum + s , 0);
console.log(sumOfScores);

// flat() - make a linear array
let flat_arr = [[1,2,3],[4,5,6]];
console.log(flat_arr.flat());


// sort () -- sort the array by alphabetical order
let fruitsArray = ['banana','apple','kiwi','cherry'];
console.log(fruitsArray.sort());


let nums_array = [10,2,20,4];
nums_array.sort((a,b) => a - b);
console.log(nums_array); // ascdending array
nums_array.sort((a,b) => b - a);
console.log(nums_array); // descending array

// slicing -- it's a sub array of array
console.log(num_array);
console.log('Array Slicing : ',num_array.slice(1,4));
console.log(num_array.slice(-4,-1));
console.log(num_array.slice(3));
console.log(num_array.slice(-3));

// concat
let a = [1,2];
let b = [3,5];
let c = [4,6];
let d = a.concat(b);
let e = c.concat(d);
console.log(d);
console.log(e);

// spread conact
let f = [...a,...b];
console.log(f);

// join()
let results = ['pass','fail','skip']
console.log(results.join('||'));
console.log(results.join('==='));


// check Arrays
let re = Array.isArray([1,2,3,4,5]);
console.log(re);

// every() -- returns true/ false based on that  condition
// some() -- atleast one is true
let sc = [45,67,64,89,54];
console.log(sc.every(s => s > 50));
console.log(sc.some(s => s > 50));

// shallow copy & Deep copy
let org_Array = [1,2,3,4,5,6];

console.log('Original Array : ', org_Array);

let copy1 = [...org_Array]; // spread operator
console.log('Copied Array : ',copy1);

let copy2 = Array.from(org_Array);
console.log(copy2);

copy1.push(10);
console.log(copy1);

// destructuring
let [aa,bb,cc] = [10,20,30];
console.log(aa);
console.log(bb);
console.log(cc);

let [first,sec,thi,...four] = [12,13,14,15,16,17];
console.log(first);
console.log(sec);
console.log(thi);
console.log(four);


let arr1 = [1,3,4];
let copy = arr1;
copy.push(5);
console.log('Original : ', arr1);
console.log('Copy : ', copy);



let result = ['pass','fail','pass'];
let counts = result.reduce((acc,r) => {
    acc[r] = (acc[r] || 0) + 1;
    return acc;
},{});
console.log(counts.pass);








