/**
 * Bug Severity Classifier
As a QA engineer, classify bugs based on two factors: 
frequency ("always", "often", "rarely") 
and 
impact ("blocker", "major", "minor").
Write a JavaScript program using nested if-else that prints the bug severity level.

Classification Matrix:
- always + blocker → P0 | always + major → P1 | always + minor → P2
- often + blocker → P1 | often + major → P2 | often + minor → P3
- rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4
 */

/**
 * input
 * frequency = "always", impact = "blocker"
 */

/**
 * output
 * Bug Title: Checkout page crashes on applying coupon 
 * Frequency: always 
 * Impact: blocker 
 * Severity: P0 
 * Critical: Stop release immediately
 */


// ["always", "often", "rarely"];

// ["blocker", "major", "minor"];

let bugFrequency = "always"
let bugImpact = "major"
let severity;
let criticalAction;

if(bugFrequency == "always"){
    if(bugImpact == "blocker"){
		severity = "P0";
		criticalAction = "Stop release immediately";
	}
	else if(bugImpact == "major"){
		severity = "P1";
		criticalAction = "Fix before release if possible";
	}
	else if(bugImpact == "minor"){
		severity = "P2";
		criticalAction = "Schedule fix in next release";
	}
}
	
else if(bugFrequency == "often"){
	if(bugImpact == "blocker"){
		severity = "P1";
		criticalAction = "Fix before release if possible";
	}
	else if(bugImpact == "major"){
		severity = "P2";
		criticalAction = "Schedule fix in next release";
	}
	else if(bugImpact == "minor"){
		severity = "P3";
		criticalAction = "Fix when convenient";
	}
}

else if(bugFrequency == "rarely"){
	if(bugImpact == "blocker"){
		severity = "P2";
		criticalAction = "Schedule fix in next release";
	}
	else if(bugImpact == "major"){
		severity = "P3";
		criticalAction = "Fix when convenient";

	}
	else if(bugImpact == "minor"){
		severity = "P4";
		criticalAction = "Low priority, track for later";
	}
}

console.log("*****Test Report *****");
console.log("Bug Title : Checkout page crashes on applying coupon");
console.log("Bug Frequency : ",bugFrequency);
console.log("Bug Impact : ",bugImpact);
console.log("Bug Severity : ",severity);
console.log("Critical Action : ",criticalAction);