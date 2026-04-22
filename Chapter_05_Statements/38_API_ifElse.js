let apiStatusCode = 203;

if(apiStatusCode === 200){
    console.log("It's working fine, OK");
    
}else if(apiStatusCode === 201){
    console.log("Created");
    
}else if(apiStatusCode === 404){
    console.log("Not Found");
    
}else if(apiStatusCode === 403){
    console.log("Forbidden");
    
}else if (apiStatusCode === 500){
    console.log("500 internal server error");
    
}else{
    console.log("No matched status code found");
    
}