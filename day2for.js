//Count how many times a number appear

let arr = [1, 2, 3, 4, 5, 1, 2, 1];
let target = 1;
let count =0;

for (let i=0; i< arr.length; i++){
    if(arr[i] === target){
        count++;
    }
}
console.log("Count:", count);
//This code counts how many times the target number 1 appears in the array.
//The for loop checks every element of the array. Whenever arr[i] === target, the count increases by 1. Since 1 appears 3 times, the final output is:
//Count: 3
//  Basically: check each number → if it is 1, increase count → print the total.