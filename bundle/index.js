"use strict";
//Typescript
let userName = "syahdan";
let userId = 123;
// userName = "sxuwrr";
console.log({ userId });
console.log({ userName });
// SLICE
const text = "Hello, World!";
const slice1 = text.slice(0, 5); // "Hello"
const slice2 = text.slice(7); // "World!"
console.log({ slice1 });
//! TASK --> SLICE
function combinationCharacter(stringInput, firstNumberInput, secondNumberInput) {
    let argumentsResult = stringInput.slice(firstNumberInput, secondNumberInput);
    return argumentsResult;
}
const firstString = "Learning Typescript is different than Javascript";
const firstNumber = 9; // Start "T"
const secondNumber = 19; // End " " but show "t"
const combinationCharacterResult = combinationCharacter(firstString, firstNumber, secondNumber);
console.log({ combinationCharacterResult });
//SUBSTRING
const subStringText = "Hello, World!";
const substring1 = text.substring(0, 5); // "Hello"
const substring2 = text.substring(7); // "World!"
// function test(value): void {
//   console.log(value)
// }
// test('helo');
// function getSubstring(input: string, start: number, end: number): string {
//   return input.substring(start, end);
// }
// const input = "Learning Typescript is different than Javascript";
// const start = 9; // from front to "T"
// const end = 19; // from back to " " and display "t"
// const result = getSubstring(input, start, end);
// console.log(result); // Output: "Typescript"
// console.log({result});
