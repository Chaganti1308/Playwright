// API response validation

let apiResponseCode = 501;

switch(apiResponseCode){
    case 200: console.log("200-OK");
                break;
    case 201: console.log("201-Created");
                break;
    case 302: console.log("302-Found");
                break;
    case 304: console.log("304-Not Modified");
                break;  
    case 400: console.log("400-Bad Request");
                break;
    case 401: console.log("401-Unauthorized");
                break;
    case 403: console.log("403-Forbidden");
                break;
    case 404: console.log("404-Not Found");
                break;
    case 500: console.log("500-Internal Server Error");
                break;
    default : console.log("No matched Api Status Code");

}
    