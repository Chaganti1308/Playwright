// Iteration

let tests = ['login','checkout','search'];

for(let i =1; i<tests.length;i++){
    console.log(tests[i]);
    
}

console.log("------------------------");
// for .. of -- cleanest for values
for(let test of tests){
    console.log(test);
    
}

console.log("------------------------");
// for .. each -- no return value
tests.forEach((test,index)  => {
    console.log(`${index} : ${test}`);
    
});

console.log("------------------------");

// entries() -- index + value
for(let[i,test] of tests.entries()){
    console.log(i,test);
    
}console.log("------------------------");

let students = ['senthil','Ajay','krish','rahul','rekha'];


// for in gives indexing
for (let student in students){
    console.log(student + " --> " + students[student]);
    
}
