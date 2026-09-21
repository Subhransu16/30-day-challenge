// Count how many even and odd numbers are in a list.
function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return { even: evenCount, odd: oddCount };
}