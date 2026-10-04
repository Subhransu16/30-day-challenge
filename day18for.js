//Find the sum of only the even numbers in an array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0 ;
 for ( let i = 0; i < arr.length; i++){
    if(i % 2 ===0){
        sum += arr[i];
    }
 }
 console.log(sum);
 //explanation: In this code, we are iterating through the array using a for loop.
 //  We check if the index 'i' is even (i % 2 === 0). If it is, we add the value at that index 
 // (arr[i]) to the sum variable. Finally, we log the sum of the even numbers in the array to the console.