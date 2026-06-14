function makeRetryTracker(max){
    let attempts = 0;
    function tryAgain(testname){
        attempts ++;
        if(attempts > max){
            return `${testname} exceed the retries ${max}`;
        }
        return `Attempt ${attempts}/${max} for ${testname}`
    }
    return tryAgain;
}

let retry = makeRetryTracker(5);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
