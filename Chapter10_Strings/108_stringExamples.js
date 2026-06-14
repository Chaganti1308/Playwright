

// Ex_1
let url = "https://staging.myapp.com/dashboard";
console.log(url.includes("staging")); // true
console.log(url.startsWith("https")); // true
console.log(url.endsWith("/dashboard")); //true

// Ex_2
let log = "[ERROR] 2024-03-07 TestCase: login - Status: 500";
let status = log.match(/Status: (\d+)/)[1];
console.log(status); //500

// Ex_3
let env = "staging"; 
let module = "auth"; 
let count = 7; 
let testId = `${env}_${module}_${String(count).padStart(3, "0")}`;
console.log(testId); // staging_auth_007


//Ex_4
let actual = " PASS "; 
let expected = "pass"; 
console.log(actual.trim().toLowerCase() === expected); // true


// Ex_5
let testUrl = "https://app.com/search?query=login&page=2&sort=asc"; 
let params = Object.fromEntries( testUrl.split("?")[1].split("&").map(p => p.split("=")) );
console.log(params); // {query = 'login' page = '2' sort = 'asc'}
// split the string using ?
// replace & with =
// return as object