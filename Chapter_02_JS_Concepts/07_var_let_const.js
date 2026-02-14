// var let const

// var has function scope
var a = 12;
console.log(a);

// function definition
function test() {
    var b = 20; // var b has function scope
    console.log(b);
    if (true) {
        var b = 25;
        console.log(b);
    }
    console.log(b);
}
test(); // function call

// let has block scope
let x = 20;
console.log(x);

function test1() {
    let x = 30; // x has local scope
    console.log(x);
    if (true) {
        let x = 35; // x has block scope with in if block
        console.log(x); //35
    }
    console.log(x); //30
}

// const has block scope
const pi = 3.14;
console.log(pi);

// const cannot be redeclared
/*
const pi = 3.15;
console.log(pi);
*/