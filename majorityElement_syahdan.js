/**
 * Returns the majority element from the input array of integers.
 *
 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
  let majority = nums[0]; // Initialize the majority element
  let count = 1; // Initialize the count of the majority element

  // Traverse the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majority) {
      count++; // Increment count for the majority element
    } else {
      count--; // Decrement count for non-majority element
      if (count === 0) {
        // If count becomes zero, update majority element
        majority = nums[i];
        count = 1; // Reset count
      }
    }
  }

  return majority;
}

// Inside the loop, it checks whether the current element nums[i] is equal to the majority element that's being tracked. If they are equal, it means the candidate majority element has encountered another occurrence, so the count is incremented.
// If the current element nums[i] is not equal to the majority element, the count is decremented, indicating that this element is not aligned with the potential majority element. This could be a different element that isn't the majority element.
// If the count becomes zero, it means the occurrences of the potential majority element have been canceled out by the occurrences of other elements seen so far. This is where the algorithm updates the majority element to the current element nums[i], and it resets the count to 1.
// After processing all elements, the loop returns the value stored in the majority variable, which should represent the candidate majority element.

console.log(majorityElement([3, 2, 1, 3])); // Output: 3
console.log(majorityElement([3, 2, 3, 2])); // Output: 3
console.log(majorityElement([1, 3, 2, 3, 1])); // Output: 1
