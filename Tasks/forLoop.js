/**
 * 1️⃣ Print "Hello" 5 times
 * 2️⃣  Print numbers from 1 to 10
 * 3️⃣ Print even numbers from 1 to 20
 * 4️⃣ Print the sum of first 10 natural numbers
 * 5️⃣ Print the multiplication table of 5
 */

// 1️⃣ Print "Hello" 5 times
for(let i =1; i<=5; i++){
	console.log("Hello");
}

//2️⃣  Print numbers from 1 to 10
console.log("Numbers from 1 to 10 ");

for (let i =1; i<=10 ; i++){
	console.log("Number ",i);
}

//3️⃣ Print even numbers from 1 to 20
console.log("Printing Even Numbers");

for (let n =1; n<=20;n++){
	if(n%2 == 0){
		console.log("Even Number : ",n);
	}
}

// 4️⃣ Print the sum of first 10 natural numbers
let sum = 0;
for(let n=1 ; n <= 5 ; n++){
	sum = sum + n;
}

console.log("Sum of first 10 natural numbers : ",sum);

// 5️⃣ Print the multiplication table of 5
let number = 5;
console.log("Multiplication Table of ",number);
for (let n = 1; n<=10 ; n++){
	console.log(number + "*" + n + "=" + (number*n));
}
