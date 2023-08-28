/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */
function containDuplicate(nums) {
  const seen = new Set(); // Create a hash set to store seen elements

  for (const num of nums) {
    if (seen.has(num)) {
      return true; // Found a duplicate, return true
    }
    seen.add(num); // Add the current number to the set
  }

  return false; // No duplicates found
}

// Test cases
console.log(containDuplicate([1, 2, 3, 1])); // Output: true
console.log(containDuplicate([1, 2, 3, 4])); // Output: false
console.log(containDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
