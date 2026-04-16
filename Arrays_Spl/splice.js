let arr = [10,20,30,40,50,60,70,80,90,100];
console.log("Original array :",arr);

const res = arr.splice(2,3);
console.log("Spliced Array : ",res);
console.log("Modified Array :",arr);
//  [10, 20,  60, 70,80, 90, 100]
const res1 = arr.splice(2,2, 100, 200);
console.log("Spliced Array : ",res1);
console.log("Modified Array : ",arr);

