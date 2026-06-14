// scope 

let env = 'Stage'; // global scope

function setupConfig(){
    let timeout = 3000;
    console.log(env);
    console.log(timeout);
}

setupConfig();
console.log(env); 
// console.log(timeout); // reference error

// Nested scope
function outer(){
    let x = 10;
    function inner(){
        let y = 20;
        console.log(x);
        console.log(y);
        
    }
    inner();
    console.log(x);
    // console.log(y);

}

outer();
