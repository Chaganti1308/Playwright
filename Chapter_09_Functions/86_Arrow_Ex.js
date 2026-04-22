// arrow function
// to add 2 numbers

const addOf2Nums = (a,b) => {
    return `Addition of ${a} and ${b} is : ${a+b}`;
}

console.log(addOf2Nums(10,20));


const addOf3Nums = (a,b,c) => {
    return `Addition of ${a},${b} and ${c} is : ${a+b+c}`;
}

console.log(addOf3Nums(10,20,30));


const doubleIt = n => n * 2;
console.log(doubleIt(10));

const getEnv = () => "Staging";
console.log(getEnv);

const getResult = (score) => {
    if(score > 50) 
        return "Pass"
    else
        return "Fail"
}

console.log(getResult(51));
console.log(getResult(50));
