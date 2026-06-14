let str = '   Hello World!  ';
console.log(str);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// trim() -- trim the whitespaces
console.log(str.trim()); 
console.log(str.trimStart()); 
console.log(str.trimEnd()); 

// replace() -- replace old string with new string
console.log(str.replace('Hello', 'Hey..Hi..! Welcome to the '));
let url = 'https://app.vwo.com?app=pramod';
console.log(url.replace(/app/g, 'qa'));

// concat()   
let str1 = "Neeha";
let str2 = 'Chaganti';
console.log(str1.concat(str2));

// split & join
console.log("pass,fail,skip".split(",")); //[ 'pass', 'fail', 'skip' ]
console.log("hello".split("")); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log("pass_fail_skip".split("_").join(" ")); //pass fail skip


// Template literal
let parts = ['2026','06','02'];
let date = parts.join('-');
console.log(date);

let ex_str = "hello";
ex_str[0] = 'H';
console.log(ex_str);

console.log(ex_str);
let upper = ex_str.toLocaleUpperCase();
console.log(upper);
