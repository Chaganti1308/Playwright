function add(a,b,c){
    return a+b+c;
}

let num = [1,2,3];
console.log(add(...num));

function hasError(...codes){
    return codes.some( c => c > 400);
}

let responseCodes = [401,402,403,400];
console.log(hasError(...responseCodes));

