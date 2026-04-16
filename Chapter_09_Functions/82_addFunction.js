// add()

function add1(a,b){
    const sum1 = a+b;
    console.log(`sum of ${a} and ${b} : ${sum1}`);
    
}

add1(10,20);

function add2(c,d){
    const sum2 = c + d;
    return (`sum of ${c} and ${d} : ${sum2}`);
}

const res = add2(12,13);
console.log(res);
