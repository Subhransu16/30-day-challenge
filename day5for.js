let a = 12;
let b = 18;
let gcd = 1;
for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
        gcd = i;
    }}
console.log("GCD =", gcd);
//This program is used to find the GCD (Greatest Common Divisor) of two numbers.
//  First, we store 12 in a and 18 in b. Then we create a variable called gcd and initially
//  set it to 1. The for loop starts from 1 and goes up to the smaller number, which is 12.
//  During each loop, the program checks whether i can divide both 12 and 18 without
//  leaving a remainder. We use % to check the remainder, so a % i === 0 means i divides
//  a exactly, and b % i === 0 means it divides b exactly. The && means both conditions
//  must be true. Whenever a common divisor is found, gcd = i stores it. As the 
//  continues, the value changes from 1 to 2, then 3, and finally 6. Since 6 is the 
// largest number that divides both 12 and 18, the final answer is GCD = 6.