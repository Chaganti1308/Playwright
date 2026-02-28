/**
 * Test Case Result Counter
After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip").
Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
 */

const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "pass", "skip", "pass", "fail", "skip", "pass", "pass", "pass"];

let passCount = 0;
let failCount = 0;
let skipCount = 0;
let passRatePercentage = 0
let lengthOfTestResults = testResults.length;
let verdict;

for (let i = 0; i < lengthOfTestResults; i++){
	if (testResults[i] === "pass"){
		passCount = passCount + 1;
	}
	else if (testResults[i] === "fail"){
		failCount = failCount + 1;
	}else {
		skipCount = skipCount + 1;
	}
}
if(passCount === lengthOfTestResults){
	verdict = "Ready for Release";
}
else if (failCount <= 2 ){
	verdict = "Minor failures. Review before release";
}else if (failCount > 2 ){
	verdict = "Block Releases"
}
else{
	console.log("");
}
	
passRatePercentage = (passCount/lengthOfTestResults * 100);

//console.log("Total Tests : " + passCount +" Passed:" + failCount + " Failed:" + skipCount + " Skipped:" + " Pass Rate : " + passRatePercentage + "%" + " VERDICT :" + verdict + ".");

console.log("*****Test report*****");
console.log("Total Tests :" + lengthOfTestResults);
console.log("Passed Tests :" + passCount);
console.log("Failed Tests :" + failCount);
console.log("Skipped Tests :" + skipCount);
console.log("Pass Rate : " + passRatePercentage.toFixed(2) + "%");
console.log("Verdict : " + verdict);