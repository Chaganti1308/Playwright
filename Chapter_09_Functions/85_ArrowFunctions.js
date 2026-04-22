// Arrow functions

// with return keyword
const greeting = function(name1){
    return `Hello ${name1}`;
}

console.log(greeting("Neeha"));


// without return keyword
const greetings = function(name2){
    `Hello ${name2}`;
}

console.log(greeting("Neeharika"));

// Arrow functions
// singlr line arrow function
const greetOfTheDay = () => `Good Morning..!`;
console.log(greetOfTheDay());

const myName = (myname) => {
    return `My name is ${myname}`;
}

console.log(myName("Chaganti"));
