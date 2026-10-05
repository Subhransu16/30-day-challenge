//3.Write a program to find the Next Greater Element (NGE) for each element in the given array.
// If no greater element exists to its right, print-1 for that element, without using any extra space,
//  and time complexity should be in O(n). Input: [3, 8, 10, 4, 7] Output: [4, 10,-1, 7,-1] Input: [5, 2, 9, 6, 3, 7] 
// Output: [9, 9,-1, 7, 7,-1]
let arr = [3, 8, 10, 4, 7];
let nge = new Array(arr.length);

for (let i = 0; i < arr.length; i++) {
    nge[i] = -1; 
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            nge[i] = arr[j];
            break; 
        }
    }
}   
var result = nge.join(", ");
console.log(result);