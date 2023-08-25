/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  // A collection of unique values, where each value can appear only once. Sets are useful for managing collections without duplicates.

  // Using a Set to create a collection of unique characters from the input string 'str'

  // The Set's size will be the number of unique characters in the string

  // Comparing the Set's size with the length of the input string to check if all characters are unique

  // the new keyword is a fundamental part of JavaScript used to create new objects from constructor functions or classes. When you see new Set(), it's creating a new Set instance that you can work with.

  return new Set(str).size === str.length;

  // .size: This property retrieves the number of unique elements in the Set. In the context of the code, it represents the count of unique characters present in the input string str.
}

console.log(hasUniqueCharacters('abcdefg')); // Output: true
console.log(hasUniqueCharacters('hello')); // Output: false
