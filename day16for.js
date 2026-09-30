//To print all numbers between 1 and 100 that are divisible by both 3 and 5, we can use a for loop in JavaScript. 
// The loop starts from 1 and continues until 100. For each number, we use the % operator to check whether it is divisible by 
// both 3 and 5. If the remainder is 0 for both numbers, it means the number can be divided evenly by both 3 and 5, so we print
//  it. We can write it like this:

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

//Here, i % 3 === 0 checks if the number is divisible by 3, while i % 5 === 0 checks if it is divisible by 5. 
// The && means both conditions must be true. Therefore, the output will be 15, 30, 45, 60, 75, 90.