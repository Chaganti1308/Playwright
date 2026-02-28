/**
 * Login Brute-Force Detection
Write a JavaScript program that simulates a login system with brute-force detection. 
The system should lock the account after 3 consecutive failed attempts. 
Use a do...while loop to process login attempts from an array. 
Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). 
Validate using strict equality (===) and logical operators (&&).
 */

/**
 * Valid: admin@testingacademy.com / Test@1234 
 * Attempts: [wrong, wrong, wrong, correct]
 */

/**
 * Attempt 1: ❌ FAILED - Strike 1/3 
 * Attempt 2: ❌ FAILED - Strike 2/3 
 * Attempt 3: ❌ FAILED - Strike 3/3 🚨 
 * ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected

 */

const ValidEMail = "admin@testingacademy.com";
const ValidPassWord = "Test@1234";
const MAX_ATTEMPTS = 3;   

var strikeCount = 0;

const attempts = [
    { email: "admin@testingacademy.com", passWord: "test@123" },
    { email: "admin@testingacademy.com", passWord: "Test@1234" },
    { email: "admin@testingacademy.com", passWord: "test@123" },
    { email: "admin@testingacademy.com", passWord: "Test@1234" }
];

let i = 0;
let accountLocked = false;

do {
    let currentAttempt = attempts[i];

    if (accountLocked) {
        console.log(`Attempt ${i + 1}: ACCOUNT LOCKED - Rejected`);// reset strikes after lockout
        strikeCount = 0;
    } else {

        // Strict equality + logical AND
        if (
            currentAttempt.email === ValidEMail &&
            currentAttempt.passWord === ValidPassWord
        ) {
            console.log(`Attempt ${i + 1}: LOGIN SUCCESSFUL`);
            strikeCount = 0; // reset strikes
        } else {
            strikeCount++;
            console.log(`Attempt ${i + 1}: FAILED - Strike ${strikeCount}/${MAX_ATTEMPTS}`);

            if (strikeCount === MAX_ATTEMPTS) {
                accountLocked = true;
                console.log("ACCOUNT LOCKED");
            }
        }
    }

    i++;

} while (i < attempts.length);