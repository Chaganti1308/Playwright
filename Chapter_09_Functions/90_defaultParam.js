// default parameter
// if arg value is not available while function call, it will take default param value.

function retry(testName,maxretries = 3,delay = 100){
    console.log(`Retrying ${testName} upto ${maxretries} times, ${delay}ms a part`);
    
}

retry("LoginTest")