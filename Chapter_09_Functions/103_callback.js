function hello(callback){
    console.log("Hello..!");
    callback();
}

function wait(){
    console.log("Wait..!");
    
}
function leave(){
    console.log("Leaving..!");
    
}

function goodBye(){
    console.log("Good Bye..!");
    
}

hello(wait);


function sum(callback, x,y){
    let res = x + y;
    callback(res);
}

function displayRes(res){
    console.log(res);
    
}

sum(displayRes,10,20);


function doing_work(worker, callback){
    console.log('Started class');
    let work = worker;

    console.log('Finished the class');
    callback();
}

function callPeople(){
    console.log("Called People");
    
}

doing_work('Class', callPeople)
