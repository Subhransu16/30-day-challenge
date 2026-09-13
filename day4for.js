// Problem: LeetCode #42 — Trapping Rain Water
// Given an array height where each element represents the height of a vertical bar, calculate how much water can be trapped after raining.
// Example:
// Input:  [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Your task
// Write a JavaScript function:
// function trap(height) {
//     // your code
// }
// Constraints:
// Don't use built-in methods like Math.max(...array) to solve it.
// Try to solve it using for loops.
// Aim for O(n) time complexity.
// Hint: For every position, the amount of water depends on the tallest bar to its left and right.
function trap(height) {
    let water = 0;
    for (let i = 0; i < height.length; i++) {
        let leftMax = 0;
        let rightMax = 0;
        // Find tallest wall on the left
        for (let j = 0; j <= i; j++) {
            if (height[j] > leftMax) {
                leftMax = height[j];
            }
        }
        // Find tallest wall on the right
        for (let j = i; j < height.length; j++) {
            if (height[j] > rightMax) {
                rightMax = height[j];
            }
        }
        // Water at position i
        let waterAtPosition = Math.min(leftMax, rightMax) - height[i];

        if (waterAtPosition > 0) {
            water += waterAtPosition;
        }
    }

    return water;
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));