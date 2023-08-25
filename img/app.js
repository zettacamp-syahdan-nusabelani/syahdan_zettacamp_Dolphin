'use strict';

// Fibonacci

// Define the condition in 'function'
function fibonacci(n) {
  if (n <= 0) {
    return [];
    // IF n = 0 it will be empty because no number can be add or no number to be generate
  } else if (n === 1) {
    return [0];
    // if n = 1 will generate 0 bcs it's just one number
  } else if (n === 2) {
    return [0, 1];
    // if n = 2 it will return the array 0,1 it means the first two number
  }

  // Do the fibonacci method
  const sequence = [0, 1];
  for (
    let i = 2;
    i < n;
    i++ // Start with '2' bcs '0' and '1' is already in the array
  ) {
    const nextNum = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNum);
    // creating new const called nextNum and will count the number i - 1 and i - 2 bcs i = 2 ( array postion so it'll be "2-1" and "2-2" which array number 0 and 1)
  }

  return sequence;
}

// try the code
const n = 10;
const result = fibonacci(n);
console.log(result);

let randomNumber = Math.trunc(Math.random() * 6) + 1;
console.log(randomNumber);
