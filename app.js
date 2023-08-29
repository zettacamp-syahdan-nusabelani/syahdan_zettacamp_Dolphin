function BookPurchasing(bookDetails, eligibleForDiscount, taxPercentage, stockAmount, purchasedAmount, creditTerm) {
  // Array to store purchase details
  const purchaseDetails = [];
  let remainingBookStock = stockAmount;
  const currentDate = new Date();

  // Generating due dates for credit terms
  const dueDates = Array.from({ length: creditTerm }, (_, index) => {
    const dueDate = new Date(currentDate);
    dueDate.setMonth(dueDate.getMonth() + index + 1);
    return dueDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  });

  // Calculating various values
  const bookDiscount = eligibleForDiscount ? (bookDetails.price * 5) / 100 : 0;
  const bookTax = bookDetails.price * (taxPercentage / 100);
  const bookAfterDiscount = bookDetails.price - bookDiscount;
  const bookAfterTax = bookTax + bookAfterDiscount;
  const taxDiscount = bookTax + bookAfterDiscount;
  const totalAmountPay = (taxDiscount * purchasedAmount).toFixed(2);
  const amountPerTerm = (totalAmountPay / creditTerm).toFixed(2);

  if (purchasedAmount === 0) {
    console.log('You buy no book.');
    return;
  }

  if (remainingBookStock < purchasedAmount) {
    console.log(`Not enough stock, just ${remainingBookStock} left`);
    return;
  }

  for (let i = 0; i < purchasedAmount; i++) {
    if (remainingBookStock === 0) {
      break;
    }
    const dueDate = dueDates[i];
    remainingBookStock--;

    // Creating the purchase detail object
    const purchaseDetail = {
      title: bookDetails.title,
      author: bookDetails.author,
      price: bookDetails.price,
      discountPercentage: eligibleForDiscount ? 5 : 0,
      bookDiscount: bookDiscount,
      bookPriceAfterDiscount: bookAfterDiscount,
      bookTax: bookTax,
      bookPriceAfterTax: bookAfterTax,
      amountToPay: taxDiscount,
      remainingStock: remainingBookStock,
      totalAmountToPay: totalAmountPay,
    };

    // Adding the purchase detail object to the array
    purchaseDetails.push(purchaseDetail);
  }

  // Creating the breakdown array using array function
  // Array.from({ length: creditTerm }, (_, index) => {...}):
  //   Array.from(...): This is a function that creates a new array based on the length you specify.
  //   { length: creditTerm }: This part tells the function how long the array should be, and it's determined by the creditTerm variable.
  //   (_, index) => {...}: This is an arrow function that's run for each position in the array being created.
  const breakdownArray = Array.from({ length: creditTerm }, (_, index) => ({
    dueDate: dueDates[index],
    amountToPay: amountPerTerm,
  }));
  // The underscore _ is a placeholder for the first parameter and isn't used in the code.
  // index is the position of the current element in the array.
  // dueDate takes its value from the dueDates array based on index.
  // amountToPay takes its value from the amountPerTerm variable.

  // Returning the result as an object
  return {
    purchaseDetails: purchaseDetails,
    totalAmountToPay: totalAmountPay,
    breakdownArray: breakdownArray,
    remainingStock: remainingBookStock,
  };
}

// Input parameters
const bookInfo = {
  title: 'Measure What Matters',
  author: 'John Doerr',
  price: 55,
};
const eligibleForDiscount = true;
const taxPercentage = 11;
const stockAmount = 3;
const purchasedAmount = 3;
const creditTerm = 5;

if (purchasedAmount === 0) {
  console.log('You buy no book.');
} else {
  const result = BookPurchasing(bookInfo, eligibleForDiscount, taxPercentage, stockAmount, purchasedAmount, creditTerm);
  console.log(result);
}
