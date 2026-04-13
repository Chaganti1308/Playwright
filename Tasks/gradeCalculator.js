/**
 * Grade Calculator:
Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading 
scale:
A: 90-100

B: 80-89

C: 70-79

D: 60-69

F: 0-59
 */


let marks = 185;
let grade;
if(typeof marks !== "number"){
    console.log("It's NaN");
    return;
}
if(marks < 0|| marks >100){
    console.log("Marks should be from 0 --- 100");
    return;
    
}
if (marks >= 90 && marks <= 100) {
    grade = "A";
} else if (marks >= 80 && marks <= 89) {
    grade = "B";
} else if (marks >= 70 && marks <= 79) {
    grade = "C";
} else if (marks >= 60 && marks <= 69) {
    grade = "D";
} else {
    grade = "F";
}
console.log(`For the score ${marks}, grade is : ${grade}`)