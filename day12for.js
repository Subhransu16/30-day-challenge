let arr = [1, 2, 2, 3, 4, 3, 5, 1];

let result = [];

for (let i = 0; i < arr.length; i++) {
    let duplicate = false;

    for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
            duplicate = true;
            break;
        }
    }

    if (!duplicate) {
        result.push(arr[i]);
    }
}

console.log(result);

//The program removes duplicate elements from an array by using two for loops.
//  First, we create an empty result array to store only unique elements.
//  The outer for loop takes each element from the original array one by one. 
// For every element, the inner for loop checks whether that element is already present in the result array.
//  We use a variable called duplicate and initially set it to false. If the current element is found in result, 
// we change duplicate to true and stop checking using break. Finally, if duplicate is still false,
//  we add the element to result using push(). In this way, repeated elements are skipped and the final array 
// contains only unique elements.