let val = null ?? "default";
// modern JS

val = val + " NC";
console.log("Returning the right side value, if left side value is null");

console.log(val); // null NC


let haveMoney = null ?? "Give some money";

console.log(haveMoney);
