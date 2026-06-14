// let [first,second,third] = [10,20,30];


// console.log(first); //10
// console.log(second); //20
// console.log(third); //30



let [first,second,...third] = [10,20,30,40,50];

console.log(first); //10
console.log(second);//20
console.log(third); //[30,40,50]

let res = ["pass","fail","pass"];
let counts = res.reduce((acc,r)=>{
    acc[r] = (acc[r] || 0)+1;
    return acc;
},{});
console.log("Pass count ",counts.pass);
