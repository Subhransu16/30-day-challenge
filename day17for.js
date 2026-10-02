//To find the sum of all elements in a list in JavaScript without using sum(), we can use a for loop. 
// First, we create a variable called total and set it to 0. Then, the loop goes through each element in the array
//  one by one and adds that element to total. For example:
let numbers = [10, 20, 30, 40, 50];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
}

console.log(total);

//Here, total starts at 0. The loop takes each number from the array and adds it to total. 
// So, it works like 0 + 10 + 20 + 30 + 40 + 50, which gives us 150. We don't use any built-in sum() function;
//  instead, we manually calculate the total using a for loop.