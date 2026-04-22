// Function Hoisting

// fun declarations are hoisted
// Arrow functions and function expressions are not hoisted

greet("Neeharika");

function greet(name){
    return `Hello...${name}`;
}

console.log(greet("Neeharika"));
