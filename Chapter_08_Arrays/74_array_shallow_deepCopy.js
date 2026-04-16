let originalArray = [1,2,3,4,5,6];

console.log("Original Array:",originalArray);

let copy1 = [...originalArray]; //spread
console.log("Copy Array : ",copy1);

let copy2 = originalArray.slice();
console.log("Sliced Array : ",copy2);

let copy3 = Array.from(originalArray);
console.log(copy3);

let copy4 = originalArray.concat();
log(copy4)


