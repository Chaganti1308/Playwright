/**
 * Write a higher-order function `runStep(stepName, actionFn)`
 * that logs the start of a step, executes the callback, 
 * and returns an object in the format `{ stepName, passed, message }`. 
 * If the callback throws an error, catch it and return `passed: false` with the error message.
 */

/**
 * input
 * 
 * runStep("open dashboard", () => "Page loaded")
 */

/**
 *
Output:
{ stepName: "open dashboard", passed: true, message: "Page loaded" }
 */