'use strict';
let favBook = 'Great at Work - Morten T Hansen';
let favBookCopy = 'Great at Work - Morten T Hansen';
const favBook2 = 'The Wisdom Of Psychopaths - Kevin Dutton';

let areBooksSame = favBook === favBook2;
let areBooksSameCopy = favBook === favBookCopy;

console.log(areBooksSame); // Output: false
console.log(areBooksSameCopy); // Output true

let bookOnePrice = 250000;
let bookTwoPrice = 150000;

let comparisonResult =
  bookOnePrice < bookTwoPrice
    ? 'Book One is cheaper.'
    : bookOnePrice > bookTwoPrice
    ? 'Book One is more expensive.'
    : 'Both books have the same price.';

console.log(comparisonResult);

const avgPrice = (bookOnePrice + bookTwoPrice) / 2;
let priceStatus = avgPrice > 500000 ? 'Expensive' : 'Cheap';
console.log(`Average price of the books is ${avgPrice}`);

console.log(priceStatus);
