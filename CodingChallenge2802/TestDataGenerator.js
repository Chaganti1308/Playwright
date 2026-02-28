/**
 * Test Data Generator
As an SDET, you frequently need to generate test data for form testing. 
Write a JavaScript program that generates test user data using a for loop. 
Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). 
Every 3rd user should be inactive (edge case testing). 
Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).
 */

            /**
             * Output : 
             * USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE 
             * USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE 
             * USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE
             */

/**
 * Test Data Generator
 */

var roleCount = 15;

// user roles
const userRoles = ["admin", "editor", "viewer", "tester", "manager"];
// domain to add as email suffix
const domain = "@testingacademy.com";

for(let i = 1; i <= roleCount; i++){
	 // id generator
	let userID = "USR-";
	if(i < 10 ){
	userID = userID + "000" + i;
	}
	else{
		userID = userID + "00" + i;
	}
	 // name generator
	let userName = "TestUser_";
		userName = userName + i;
		
	// email generator
	let userEmail = "testuser";
		userEmail = userEmail + i+ domain;

    // role generator
	let role = userRoles[(i-1) % userRoles.length];
	
    // status generator
	let status;
	if(i % 3 === 0)
		status = "INACTIVE";
	else
		status = "ACTIVE";

	console.log( userID + ' | ' + userName + ' | ' + userEmail + ' | ' + role + ' | ' + status);
}
	