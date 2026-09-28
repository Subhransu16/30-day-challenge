let n = Number(prompt("Enter N:"));

let a = 0;
let b = 1;

for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
//The Fibonacci sequence starts with 0 and 1.
//  Every next number is calculated by adding the previous two numbers.
//  In this program, a stores the current number and b stores the next number. The for loop runs N times,
//  and each time it prints a. Then we calculate the next Fibonacci number using a + b
//  and update the values of a and b. So, if the user enters 7, the loop prints the first 7
//  Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8.