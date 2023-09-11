"use strict";
console.log('=== TSC Test ===');
//  Array<string> 
// let cars: Array<string> = ['BMW', 'Bentley', 'Aston Martin'];
// console.log(cars);
// Task 1
function combineArrayUnion(dataSelection) {
    let result = ''; // For accepting combine file
    dataSelection.forEach((value) => {
        result = result + " " + value; // Combine formula
    });
    return result.trim();
}
const case1 = combineArrayUnion([1, "data", '3', `result`]);
const bejo = combineArrayUnion(['Bejo', 'has', '4', 'sport', 'car']);
console.log(case1);
console.log(bejo);
function sumAndConcateArrays(sumOrConcate) {
    if (Array.isArray(sumOrConcate)) {
        //JavaScript function that checks whether the provided value is an array or not. It returns true if the value is an array, and false otherwise.
        let hasStrings = false;
        let hasNumbers = false;
        sumOrConcate.forEach((value) => {
            if (typeof value === 'string') {
                hasStrings = true;
            }
            else if (typeof value === 'number') {
                hasNumbers = true;
            }
        });
        if (hasStrings && hasNumbers) {
            return 'Invalid input'; // Return 'invalid input' if the array contains a mix of strings and numbers
        }
        if (hasStrings) {
            let result = '';
            sumOrConcate.forEach((value) => {
                if (typeof value === 'string') {
                    result = result + " " + value.trim();
                }
            });
            return result.trim(); // Trim to remove leading and trailing spaces
        }
        else if (hasNumbers) {
            let result = 0;
            sumOrConcate.forEach((value) => {
                if (typeof value === 'number') {
                    result = result + value;
                }
            });
            return result;
        }
    }
    return 'Invalid input'; // Return 'invalid input' if the input is not an array
}
console.log(sumAndConcateArrays([1, 2, 3, 4])); // Output: 10
console.log(sumAndConcateArrays(['the', 'dolphins', 'of', 'zettacamp'])); // Output: 'the dolphins of zettacamp'
console.log(sumAndConcateArrays(['Bejo', 'has', 4, 'sport', 'car'])); // Output: 'invalid input'
function transformProductToSimplified(productResult) {
    const simplifiedProductResult = {
        Name: productResult.Name,
        Buyable: productResult.Quantity > 0 && productResult.InStock > 0, // Determine if it's buyable based on conditions
    };
    if (simplifiedProductResult.Buyable) {
        simplifiedProductResult.TotalPrice = productResult.Quantity * productResult.Price;
    }
    return simplifiedProductResult;
}
// Test cases
const product1 = {
    Name: 'Coca Cola',
    Vendor: 'Coca Cola Company',
    Quantity: 5,
    InStock: 100,
    Price: 5000,
};
const product2 = {
    Name: 'Sari Roti',
    Vendor: 'Toko Kue Sebelah',
    Quantity: 2,
    InStock: 0,
    Price: 10000,
};
const product3 = {
    Name: 'Sari Roti',
    Vendor: 'Toko Kue Sebelah',
    Quantity: 2,
    InStock: 0,
    Price: 10000,
};
console.log(transformProductToSimplified(product1)); // Output for Case 1
console.log(transformProductToSimplified(product2)); // Output for Case 2
