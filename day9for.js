function firstMissingPositive(nums) {
    let n = nums.length;
    // Put each positive number in its correct index
    for (let i = 0; i < n; i++) {
        while (
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            let correctIndex = nums[i] - 1;
            // Swap
            [nums[i], nums[correctIndex]] =
            [nums[correctIndex], nums[i]];
        }
    }
    // Find the first missing positive number
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    // If 1 to n are all present
    return n + 1;
}
console.log(firstMissingPositive([3, 4, -1, 1])); 
console.log(firstMissingPositive([1, 2, 0])); 
console.log(firstMissingPositive([7, 8, 9, 11, 12])); 
