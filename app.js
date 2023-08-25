let favBook = 'Great at Work - Morten T Hansen';
const favBook2 = 'The Wisdom Of Psychopaths - Kevin Dutton';
// cannot update 'const'

const x = [];

console.log(favBook);

favBook = 'Measure What Matters - John Doerr';
x.foo = 'Books';

console.log(favBook);
console.log(x);

const readingTime = 'reading it everyday for 30 minutes';
const numberOfBook = 1;
console.log(typeof numberOfBook, numberOfBook);

const concatOneTwo = `${numberOfBook} ${favBook}  ${readingTime}`;
console.log(concatOneTwo);
