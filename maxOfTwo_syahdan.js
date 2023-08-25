/**
 *
 * Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers without using any arrays or built-in functions like max().
 *
 */

function max_of_two(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max_of_two(10, 5));
console.log(max_of_two(45, 66));

//Ternary
function max_of_two_copy(a, b) {
  return a > b ? a : b;
  // condition ? value_if_true : value_if_false
}

console.log(max_of_two_copy(10, 5)); // Output: 10
console.log(max_of_two_copy(45, 66)); // Output: 66
console.log(max_of_two_copy(-5, -10)); // Output: 66

// ASSIGNMENT

// Obj Creation
let person = {
  name: 'John',
  age: 30,
};

// Adding additional property to 'person' Obj
person.location = 'New York';

console.log(person); // { name: "John", age: 30, location: "New York" }

let students = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 25 },
];

//Pushing in new additional data
students.push({ name: 'Eve', age: 23 });
// students.unshift({ name: 'Inaina', age: 55 });

console.log(students, students.length);

let x = 10;
let y = 5;

let addition = x + y;
let subtraction = x - y;
let multiplication = x * y;
let division = x / y;
let remainder = x % y;
// The modulo operation calculates the remainder when one number is divided by another. In this case, 10 % 5 calculates the remainder of dividing 10 by 5.

console.log(addition, subtraction, multiplication, division, remainder);
