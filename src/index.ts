//Typescript

let userName: string = "syahdan";
let userId: number = 123;

// userName = "sxuwrr";

console.log({userId});
console.log({ userName });



// SLICE
const text: string = "Hello, World!";
const slice1: string = text.slice(0, 5); // "Hello"
const slice2: string = text.slice(7);    // "World!"

console.log({slice1});


//! TASK --> SLICE

function combinationCharacter(stringInput: string, firstNumberInput: number, secondNumberInput: number) {
  let argumentsResult: string = stringInput.slice(firstNumberInput, secondNumberInput);
  return argumentsResult;
}

const firstString: string = "Learning Typescript is different than Javascript";
const firstNumber: number = 9; // Start "T"
const secondNumber: number = 19; // End " " but show "t"

const combinationCharacterResult: string = combinationCharacter(firstString,firstNumber,secondNumber);

console.log({combinationCharacterResult});


//SUBSTRING

const subStringText: string = "Hello, World!";
const substring1: string = text.substring(0, 5); // "Hello"
const substring2: string = text.substring(7);    // "World!"



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