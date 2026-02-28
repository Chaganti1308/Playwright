/**
 * Retry Failed API Call
In automation testing, API calls sometimes fail due to network issues. 
Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
The program should retry a maximum of 5 times. 
Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). 
Log each attempt and print the final result.
 */

/**
Attempt 1: ❌ FAILED (Timeout/Error) 
Attempt 2: ✅ SUCCESS (Response 200 OK) API call PASSED after 2 attempt(s).
 */

let attempt = 0;
let maxAttempts = 5;
//let success = false;

do{
	attempt++;
	let randomValue = Math.random();
    console.log("Random value : ", randomValue);
    
	if(randomValue > 0.6){
		console.log("Attempt " + attempt + " ❌ FAILED (Timeout/Error)");
	} else{
		console.log("Attempt " + attempt + " ✅ SUCCESS (Response 200 OK) API call PASSED after " + attempt + " attempt(s)");
        break;
		//let success = true;
	}
}while (attempt < maxAttempts); 