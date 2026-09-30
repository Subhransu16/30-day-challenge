for (let num = 2; num <= 100; num++) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

//To print all prime numbers from 1 to 100 in JavaScript, we can use a for loop inside another for loop.
//  A prime number is a number greater than 1 that can only be divided by 1 and itself. First, the outer
//  loop goes through each number from 2 to 100. For every number, we initially assume that it is prime 
// by setting isPrime = true. Then, the inner loop checks whether the number can be divided evenly by any
//  number between 2 and the number itself. We use the % operator to check the remainder. If num % i === 0,
//  it means the number is divisible by i, so it is not prime. We then set isPrime to false and use break because
//  there is no need to check further. Finally, if isPrime is still true, we print the number using console.log().
//  This gives us the prime numbers from 1 to 100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
//  67, 71, 73, 79, 83, 89, and 97