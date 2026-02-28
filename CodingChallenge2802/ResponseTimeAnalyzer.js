/**
 * Response Time SLA Analyzer
As a performance tester, you collect API response times in milliseconds. 
Write a JavaScript program using a while loop that 
analyzes an array of response times and 
prints a performance report with min, max, average, and how many responses breached the SLA threshold (> 500ms). 
Use comparison operators for min/max tracking.
 */

/**
 * responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
 */

/**
 * Total Requests: 6 
 * Min Response: 120ms 
 * Max Response: 620ms 
 * SLA Breaches: 2 (33.33%) 
 * Overall Status: ❌ SLA VIOLATED
 */

const responseTimes = [120, 230, 450, 510, 180, 620, 400, 280, 500, 333, 444];
const SLA_LIMIT = 500;

// total count of requests
const totalRequests = responseTimes.length;
let minResponseTime = responseTimes[0]; // min response time initialized to first element of array
let maxResponseTime = responseTimes[0]; //

// initializing sum and breach count
let sum = 0;
let breachTickets = 0; 

let i = 0;
while(i < totalRequests){
	currentResponseTime = responseTimes[i];
    // checking for min and max response time with current response time
	if(currentResponseTime < minResponseTime){
		minResponseTime = currentResponseTime;
	}
	if(currentResponseTime > maxResponseTime){
		maxResponseTime = currentResponseTime;
	}
	sum = sum + currentResponseTime;
	
	if(currentResponseTime > SLA_LIMIT){
		breachTickets = breachTickets + 1;
	}
	i++;
}

// calculating average response time and breach percentage
let avgResponseTime = sum/totalRequests;

// calculating breach percentage
let breachPercentage = (breachTickets/totalRequests) * 100;


console.log("*****Test Report*****");
console.log("Total Requests :", totalRequests);
console.log("Min response Time :", minResponseTime);
console.log("Max response Time :", maxResponseTime);
console.log("SLA Breaches : ", breachTickets + "(" + breachPercentage + "%)" );

if (breachTickets > 0) {
    console.log("Overall Status: ❌ SLA VIOLATED");
} else {
    console.log("Overall Status: ✅ SLA MET");
}

