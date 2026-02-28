/**
Element Visibility Checker

In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. 
Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. 
Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
 */

// Element is present and displayed but not enabled. Severity is WARNING because it's not fully interactable.

// Expected Output:
// Status: DISABLED Severity: WARNING 
// Action: Element is visible but disabled. 
// Wait for enable state or check preconditions.

let isElementPresent = true;
let isElementDisplayed = false;
let isElementEnabled = true;

let state;
let action;



if(isElementPresent === true && isElementDisplayed === true && isElementEnabled === true){
	state = "Ready";
	action = "Safe to interact with the element";
}
else if (isElementPresent === true && isElementDisplayed === true && isElementEnabled === false){
	state = "Disabled";
	action = "Element is in disabled state";
}
else if (isElementPresent === true && isElementDisplayed === false){
	state = "Hidden";
	action = "Element is Present but hidden on the UI.";
}
else if(isElementPresent === false){
	state = "NOT FOUND";
	action = "Element is not found";
}else{
	state = UNKNOWN;
	action = "Unexpected State"
}

let severity = isElementPresent === false ? "CRITICAL" : ((isElementDisplayed === false || isElementEnabled === false)? "WARNING" : "OK");

console.log("******Test Report******");
console.log(" Status : ", state);
console.log(" Severity : ", severity);
console.log("Action : ", action);


