let browsers = ['Chrome','Firefox','Safari','Opera','Edge'] ;

console.log(browsers);

// pop() -- deletes from end
let pop_element = browsers.pop();
console.log("deleted browser element :", pop_element);
console.log(browsers);

// shift() -- removes starting
let removed = browsers.shift();
console.log("Removed browser : ", removed);
console.log(browsers);


for(let i = 0; i < browsers.length; i++){
    console.log(browsers[i]);
    if(browsers[i] == "Opera"){
        console.log("Opera is removed from the browsers");  
    }
}

