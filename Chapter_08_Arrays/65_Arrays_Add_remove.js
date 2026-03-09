let num_array = [1,2,3];
console.log("Original Array :",num_array);


// push() -- Adding elements to array 
num_array.push(4);
console.log("Array after adding elements ",num_array);

// pop() -- removes elements from array
num_array.pop();
console.log("Array after removing elements ",num_array);

// many at a time
num_array.push(5,6,7,8,9);
console.log("Added many elements ",num_array);

// unshift -- add elemengts in the front
num_array.unshift(0);
console.log("Array after unshift", num_array);

// splice(start count)
num_array.splice(3,1);
console.log(num_array);

num_array.splice(3,1,3,4,5);
console.log(num_array);

let num = [1,2,5,9];
num.splice(2,0,3,4);
console.log(num);
