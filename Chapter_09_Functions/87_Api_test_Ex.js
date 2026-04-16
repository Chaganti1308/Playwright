// validate the status code

// using normal function
function validateStatusCode(status){
    if(status >= 200 && status <= 300){
        return ("Requset is fine");
    }
    else{
        return("Requset is failed")
    }
}

console.log(validateStatusCode(204));
console.log(validateStatusCode(200));
console.log(validateStatusCode(300));
console.log(validateStatusCode(500));

// using Function expressions
const validateStatusCode_Exp = function(statusCode){
    if(statusCode >= 200 && statusCode <= 300){
        return ("Requset is fine -- 1");
    }
    else{
        return("Requset is failed -- 1")
    }
}
console.log(validateStatusCode_Exp(300));
console.log(validateStatusCode_Exp(500));

// using arrow function
const statusCodeValidation = (apiStatusCode) =>{
    if(apiStatusCode >= 200 && apiStatusCode <= 300){
        return ("Requset is fine -- 2");
    }
    else{
        return("Requset is failed -- 2");
    }
}

console.log(statusCodeValidation(300));
console.log(statusCodeValidation(500));