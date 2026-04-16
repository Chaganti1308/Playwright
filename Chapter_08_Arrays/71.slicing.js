const arr = [1, 2, 3, 4, 5, 6];
//           0  1  2  3  4  5 -- positive index
//           -6 -5 -4 -3 -2 -1 -- negative index
// slice()
console.log("Sliced Array : ",arr.slice(1,4));
console.log("Sliced Array : ",arr.slice(-6,-2));
console.log("Sliced Array : ",arr.slice(-2,-4));
console.log("Sliced Array : ",arr.slice(-2));
console.log("Sliced Array : ",arr.slice(-4));
console.log("Sliced Array : ",arr.slice(2,9));
console.log("Sliced Array : ",arr.slice(0)); // prints entire array


