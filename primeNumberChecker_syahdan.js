'use strict';

// ASSIGNMENT
// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. In simpler terms, a prime number is a number that cannot be evenly divided by any other number except 1 and the number itself.
/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
  return n > 1
    ? n <= 3
      ? // If the n is 2 or 3, it's prime
        true
      : n % 2 === 0 || n % 3 === 0
      ? // If divisible by 2 or 3 (except 2 and 3), not prime, 4/6/8/9/10
        false
      : (() => {
          // Loop to check divisibility by 6x +- 1
          for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) {
              // for (initialization; condition; increment/decrement) {
              //   // code to be executed in each iteration
              // }

              // checking for divisibility by numbers in the form of 6x +- 1 up to the square root of n. This effectively filters out numbers that are divisible by these specific values, allowing the code to efficiently identify prime numbers.

              // When x = 0: 6x - 1 = 6 * 0 - 1 = -1 (not relevant)
              // When x = 1: 6x - 1 = 6 * 1 - 1 = 5
              // When x = 1: 6x + 1 = 6 * 1 + 1 = 7
              // When x = 2: 6x - 1 = 6 * 2 - 1 = 11
              // When x = 2: 6x + 1 = 6 * 2 + 1 = 13

              // If divisible, then not prime
              return false;
            }
          }
          // If no conditions for non-primality were met, the number is prime
          return true;
        })()
    : // Numbers less than or equal to 1 are not prime
      false;
}

console.log(isPrime(10));
console.log(isPrime(43));

console.log(isPrime(17));
console.log(isPrime(13));
console.log(isPrime(26));
