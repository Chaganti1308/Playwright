function runWithLogging(testfn,testName){
    console.log(`Starting :, ${testName}`);
    let result = testfn();
    console.log(`Finished : ${testName} -> ${result}`);
    return result;
    

}

function loginTest(){
    return "Pass";
}

runWithLogging(loginTest, "Login Test");

// x - call back fn
function x(){
    console.log("Namaste");
    
}

// y - higher order fn
function y(x){
    x();
}

