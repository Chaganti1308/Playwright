let a = [1,2];
let b = [3,4];
let c = a.concat(b);
console.log(c);


// spread

let d = [...a,...b];
console.log(d);

// join()
let testRes = ["pass","fail","skip"].join("---");
let testRes1 = ["pass","fail","skip"].join("->");
let testRes2 = ["pass","fail","skip"].join("==");
let testRes3 = ["pass","fail","skip"].join("||");
console.log(testRes);
console.log(testRes1);
console.log(testRes2);
console.log(testRes3);

