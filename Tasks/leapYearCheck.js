/**
 * Create a program that determines whether a given year is a leap year.
 * A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
 * Use an if-else statement to make this determination.
 */

let number = 2000

if((number % 4 === 0)&& (number % 100 === 0) && (number % 400 ===0)){
	console.log(number, " is a leap year");
}else{
    console.log(number, " is not a leap year");
}
	
	