let numbers = [10, 25, 5, 40, 15];
let largest = numbers[0];
let smallest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
let difference = largest - smallest;
console.log(difference);
//To find the difference between the largest and smallest numbers in an array,
//  we use a for loop. First, we create two variables called largest and smallest
//  and assign the first element of the array to both. Then, we loop through each
//  number in the array. If the current number is greater than largest, we update
//  the largest variable. Similarly, if the current number is smaller than smallest,
//  we update the smallest variable. Once the loop finishes, we have the largest and 
// smallest numbers in the array. Finally, we subtract the smallest number from the
//  largest number to get the difference. In this example, the largest number is 40
//  and the smallest number is 5, so the difference is 40 - 5 = 35.