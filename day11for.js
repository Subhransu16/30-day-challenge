function moveZeroes(nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            index++;
        }
    }

    return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
// Problem: Move all 0s to the end of the array while maintaining the order of the non-zero elements.
// The idea behind Move Zeroes is to go through the array and move every non-zero number toward the beginning while 
// keeping the same order. We use two variables: i to check every element and index to remember where the next non-zero number 
// should be placed. Whenever nums[i] is not 0, we swap it with nums[index] and increase index. 
// For example, in [0, 1, 0, 3, 12], we first find 1 and move it to the beginning, then find 3 and move it after 1, 
// and finally move 12 after 3. The remaining positions automatically contain zeros, giving [1, 3, 12, 0, 0]. 
// This solution takes O(n) time and uses O(1) extra space.