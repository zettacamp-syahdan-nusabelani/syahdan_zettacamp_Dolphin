// function BookFinalPrice(x) {
//   const eligibleForDiscount = false; // Set this to true or false based on eligibility
//   const bookDiscount = eligibleForDiscount ? (x * 5) / 100 : 0;
//   const bookTax = x * 0.11;
//   const bookAfterDiscount = x - bookDiscount;
//   const bookAfterTax = bookTax + x;
//   const taxDiscount = bookTax + bookAfterDiscount;
//   const discountMessage = eligibleForDiscount ? `🈹 DISCOUNT 🈹` : `NO DISCOUNT`;

//   const bookResult = `Congratulation! Your Items Get ${discountMessage}!!!. The discount is $${bookDiscount} and after discount your item will be $${bookAfterDiscount} and tax of your item will be $${bookTax} and after tax will be $${bookAfterTax}. And the amount that you have to pay is $${taxDiscount}`;

//   return bookResult;
// }

// console.log(BookFinalPrice(55)); // Example with discount eligibility set to true

// In JavaScript, if you define a function without any parameters and call it without providing any arguments, the function will execute with no parameters. You can reference undefined for any parameter you attempt to use inside the function.
// it means that the function can be called without providing any arguments.

function BookPurchasing(bookDetails, eligibleForDiscount, taxPercentage) {
  const { title, author, price } = bookDetails; // provided uses destructuring assignment to extract properties from an object.

  //to have not to do

  //this order works correctly because the bookDetails assignment is inside the BookPurchasing function, and it only extracts values from the bookInfo object when the function is called.

  const bookDiscount = eligibleForDiscount ? (price * 5) / 100 : 0;
  const bookTax = price * (taxPercentage / 100);
  const bookAfterDiscount = price - bookDiscount;
  const bookAfterTax = bookTax + bookAfterDiscount;
  const taxDiscount = bookTax + bookAfterDiscount;
  const discountMessage = eligibleForDiscount ? `🈹 DISCOUNT 🈹` : `NO DISCOUNT`;

  const bookResult = `Congratulations! You're purchasing "${title}" by ${author}. Your item gets ${discountMessage} The discount is $${bookDiscount}, and after the discount, your item will be $${bookAfterDiscount}. The tax on your item will be $${bookTax}, and after tax it will be $${bookAfterTax}. The amount that you have to pay is $${taxDiscount}`;

  return bookResult;
}

// Example usage
const bookInfo = {
  title: 'The Great Book',
  author: 'John Doe',
  price: 55,
};
const eligibleForDiscount = true; // Set this to true or false based on eligibility
const taxPercentage = 11;

console.log(BookPurchasing(bookInfo, eligibleForDiscount, taxPercentage));
