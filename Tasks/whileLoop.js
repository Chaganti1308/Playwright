/**
1️⃣ Print "Playwright" 5 times

2️⃣ Print numbers from 1 to 10

3️⃣ Print even numbers from 1 to 20

4️⃣ Calculate sum of first 10 natural numbers

5️⃣ Print the multiplication table of 7
 */

// 1️⃣ Print "Playwright" 5 times
let count  = 0;
while(count <5){
	console.log("Playwright");
	count++;
}

// 2️⃣ Print numbers from 1 to 10
let number  = 1;
while(number <= 10){
	console.log("Number ", number);
	number++;
}

// 3️⃣ Print even numbers from 1 to 20
let num  = 1;
while(num <= 20){
	if(num %2 === 0){
		console.log("Even Number ", num);
	}
	num++;	
}

// 4️⃣ Calculate sum of first 10 natural numbers
let n = 1;
let sum = 0;
while(n <= 10){
	sum = sum + n;
	n++;
}
console.log("First 10 Natural numbers sum is ", sum);

// 5️⃣ Print the multiplication table of 7
let i = 1;
let numb = 7;
console.log("Multiplication table of 7");
while (i <= 10){
	console.log( numb + "*" + i + "=" + (numb*i));
	i++;
}