function getStatus(code){
    if(code>= 200 && code <= 300) return "Sucess";
    if(code>= 400 && code <= 500) return "Client error";
    if(code> 500) return "Server Error";
}

console.log(getStatus(400));