let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        count++;
    }
}
console.log("Numbers divisible by 3:", count);
//This program counts how many numbers from 1 to 100 are divisible by 3.
//  We first set count to 0 because we haven’t found any numbers yet. 
// The for loop goes through each number from 1 to 100. Inside the loop,
//  i % 3 === 0 checks whether the number can be divided by 3 without leaving a remainder.
//  If it can, we increase count by 1 using count++. After checking all the numbers,
//  the program prints 33, because there are 33 numbers between 1 and 100 that are divisible
//  by 3.