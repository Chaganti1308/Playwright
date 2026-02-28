/**
 * Test Environment Config
In CI/CD pipelines, tests run against different environments. 
Write a JavaScript program using a switch statement 
that takes an environment name stored in a variable and 
prints the base URL, API key pattern, and timeout. 
Use const for fixed values and let for the assembled config.

Environments: dev, staging, qa, production/prod. 
Each has different base URL, API key prefix, timeout, and description.
 */


let Environment = "Production";

const Dev_TimeOuts = 3000;
const Stage_TimeOuts = 5000;
const QA_TimeOuts = 7000;
const Prod_TimeOuts = 10000;

let config = {
	baseURL : "",
	APIKey : "",
	timeout : "",
	description : ""
};

switch(Environment){
	case "Dev" : 
		config.baseURL = "https://dev.api.com";
		config.APIKey = "DEV-xxxxxxx";
		config.timeout = "DEV-Timeout";
		config.description = "Development environment for local testing";
		break;
	case "Stage" : 
		config.baseURL = "https://stage.api.com";
		config.APIKey = "STAGE-xxxxxxx";
		config.timeout = "STAGE-Timeout";
		config.description = "STAGE environment for local testing"; 
		break;
	case "QA" : 
		config.baseURL = "https://qa.api.com";
		config.APIKey = "QA-xxxxxxx";
		config.timeout = "QA-Timeout";
		config.description = "QA environment for local testing";
		break;
	case "Production" : 
		config.baseURL = "https://prod.api.com";
		config.APIKey = "PROD-xxxxxxx";
		config.timeout = "PROD-Timeout";
		config.description = "Production environment for local testing"; 
		break;
	default :
		console.log("Invalid environment is selected");
		break;
}

if (config.baseURL !== "") {
    console.log("Environment:", Environment);
    console.log("Base URL:", config.baseURL);
    console.log("API Key Pattern:", config.APIKey);
    console.log("Timeout:", config.timeout + "ms");
    console.log("Description:", config.description);
}
