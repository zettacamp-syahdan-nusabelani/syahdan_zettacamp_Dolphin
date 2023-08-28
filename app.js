// console.log(Array.from([1, 2, 3], (x) => x + x));
// // mapping function that will be applied to each element of the initial array during the creation of the new array. In this case, it takes an element x and returns its doubled value by adding x to itself (x + x).
// console.log(Array.from('foo'));

// function BookPurchasing(bookDetails, eligibleForDiscount, taxPercentage, stockAmount, purchasedAmount, creditTerm) {
//   if (purchasedAmount === 0) {
//     console.log('You buy no book.');
//     return;
//   }

//   const { title, author, price } = bookDetails;

//   const bookDiscount = eligibleForDiscount ? (price * 5) / 100 : 0;
//   const bookTax = price * (taxPercentage / 100);
//   const bookAfterDiscount = price - bookDiscount;
//   const bookAfterTax = bookTax + bookAfterDiscount;
//   const taxDiscount = bookTax + bookAfterDiscount;
//   const totalAmountPay = (taxDiscount * purchasedAmount).toFixed(2);

//   if (purchasedAmount > stockAmount) {
//     console.log(`Sorry, there are not enough books in stock.`);
//     return;
//   }

//   let remainingBookStock = stockAmount;

//   const currentDate = new Date();

//   const dueDates = Array.from({ length: creditTerm }, (_, index) => {
//     const dueDate = new Date(currentDate);
//     dueDate.setMonth(dueDate.getMonth() + index + 1);
//     return dueDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
//   });

//   const downPayment = (totalAmountPay * 0.2).toFixed(2);
//   const remainingAmount = (totalAmountPay - downPayment).toFixed(2);
//   const amountPerTerm = (remainingAmount / (creditTerm - 1)).toFixed(2);

//   for (let i = 0; i < purchasedAmount; i++) {
//     if (remainingBookStock === 0) {
//       console.log(`Sorry, the book "${title}" is out of stock.`);
//       break;
//     }

//     const dueDate = dueDates[i];
//     remainingBookStock--;

//     console.log(`You're purchasing "${title}" by ${author}. Price : ${price}`);
//     console.log(`🈹 DISCOUNT ${eligibleForDiscount ? '5%' : '0%'} 🈹`);
//     console.log(`Discount for this book: $${bookDiscount}`);
//     console.log(`Price after discount for this book: $${bookAfterDiscount}`);
//     console.log(`Tax for this book: $${bookTax}`);
//     console.log(`Price after tax for this book: $${bookAfterTax}`);
//     console.log(`Amount to pay for this book: $${taxDiscount}`);
//     console.log(`Remaining stock: ${remainingBookStock}`);
//     console.log(`Total amount to pay for this book: $${totalAmountPay}`);
//     console.log(`Down Payment: $${downPayment}`);
//     console.log(`Remaining Amount: $${remainingAmount}`);
//     console.log(`Due Date for Payment: ${dueDate}`);
//     console.log('---------------------------------');

//     if (remainingBookStock === 0) {
//       console.log(`The book "${title}" is now out of stock.`);
//     } else if (i < purchasedAmount - 1) {
//       console.log(`You can purchase another book.`);
//     } else {
//       console.log(`You've purchased all the books you wanted.`);
//     }
//     console.log('----------------------------------');
//   }

//   console.log(`📚 TOTAL AMOUNT THAT YOU'VE TO PAY $${totalAmountPay} 📚 `);

//   console.log(`Breakdown of Amounts for Each Term:`);
//   dueDates.forEach((dueDate, index) => {
//     const amountForTerm = index === 0 ? downPayment : amountPerTerm;
//     console.log(`${dueDate}: Amount to pay $${amountForTerm}`);
//   });

//   console.log(`${title}'s stock is now ${remainingBookStock} left`);
// }

// // Test Case
// const bookInfo = {
//   title: 'Measure What Matters',
//   author: 'John Doerr',
//   price: 55,
// };
// const eligibleForDiscount = true;
// const taxPercentage = 11;
// const stockAmount = 1;
// const purchasedAmount = 1;
// const creditTerm = 4;

// // Call the BookPurchasing function with the provided parameters
// BookPurchasing(bookInfo, eligibleForDiscount, taxPercentage, stockAmount, purchasedAmount, creditTerm);

// Define a function named BookPurchasing that takes various parameters related to book purchasing
function BookPurchasing(bookDetails, eligibleForDiscount, taxPercentage, stockAmount, purchasedAmount, creditTerm) {
  // Check if no books are being purchased
  if (purchasedAmount === 0) {
    console.log('You buy no book.');
    return; // Exit the function
  }

  // Destructure the book details object into individual variables
  const { title, author, price } = bookDetails;

  // Calculate the book-related values based on the provided parameters
  const bookDiscount = eligibleForDiscount ? (price * 5) / 100 : 0;
  const bookTax = price * (taxPercentage / 100);
  const bookAfterDiscount = price - bookDiscount;
  const bookAfterTax = bookTax + bookAfterDiscount;
  const taxDiscount = bookTax + bookAfterDiscount;
  const totalAmountPay = (taxDiscount * purchasedAmount).toFixed(2);

  // Check if there are enough books in stock for the purchase
  if (purchasedAmount > stockAmount) {
    console.log(`Sorry, there are not enough books in stock.`);
    return; // Exit the function
  }

  // Initialize the remaining book stock based on the available stock
  let remainingBookStock = stockAmount;

  // Get the current date
  const currentDate = new Date();

  // Calculate an array of due dates based on the current date and credit term

  // Initialize an array to store the calculated due dates
  const dueDates = Array.from({ length: creditTerm }, (_, index) => {
    // Create a new Date object based on the current date
    const dueDate = new Date(currentDate);

    // Calculate the month for the due date by adding the current index + 1
    dueDate.setMonth(dueDate.getMonth() + index + 1);

    // Convert the due date to a formatted string (e.g., "September 28, 2023")
    return dueDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  });

  // Calculate the amount to pay per term by dividing the total amount by the credit term
  const amountPerTerm = (totalAmountPay / creditTerm).toFixed(2);

  // Loop through each purchased book
  for (let i = 0; i < purchasedAmount; i++) {
    // Check if the book is out of stock
    if (remainingBookStock === 0) {
      console.log(`Sorry, the book "${title}" is out of stock.`);
      break; // Exit the loop
    }

    // Get the due date for the current term
    const dueDate = dueDates[i];
    remainingBookStock--;

    // Display book purchase details
    console.log(`You're purchasing "${title}" by ${author}. Price : ${price}`);
    console.log(`🈹 DISCOUNT ${eligibleForDiscount ? '5%' : '0%'} 🈹`);
    console.log(`Discount for this book: $${bookDiscount}`);
    console.log(`Price after discount for this book: $${bookAfterDiscount}`);
    console.log(`Tax for this book: $${bookTax}`);
    console.log(`Price after tax for this book: $${bookAfterTax}`);
    console.log(`Amount to pay for this book: $${taxDiscount}`);
    console.log(`Remaining stock: ${remainingBookStock}`);
    console.log(`Total amount to pay for this book: $${totalAmountPay}`);
    console.log(`Due Date for next Payment: ${dueDate}`);
    console.log('---------------------------------');

    // Check the purchase status and remaining stock
    if (remainingBookStock === 0) {
      console.log(`The book "${title}" is now out of stock.`);
    } else if (i < purchasedAmount - 1) {
      console.log(`You can purchase another book.`);
    } else {
      console.log(`You've purchased all the books you wanted.`);
    }
    console.log('----------------------------------');
  }

  // Display the total amount that needs to be paid
  console.log(`📚 TOTAL AMOUNT THAT YOU'VE TO PAY $${totalAmountPay} 📚 `);

  // Display the breakdown of amounts for each term
  console.log(`Breakdown of Amounts for Each Term:`);
  dueDates.forEach((dueDate, index) => {
    const amountForTerm = amountPerTerm;
    console.log(`${dueDate}: Amount to pay $${amountForTerm}`);
  });

  // Display the remaining stock after the purchases
  console.log(`${title}'s stock is now ${remainingBookStock} left`);
}

// Define the book information, discounts, tax, stock, purchase amount, and credit term
const bookInfo = {
  title: 'Measure What Matters',
  author: 'John Doerr',
  price: 55,
};
const eligibleForDiscount = true;
const taxPercentage = 11;
const stockAmount = 2;
const purchasedAmount = 1;
const creditTerm = 4;

// Call the BookPurchasing function with the provided parameters
BookPurchasing(bookInfo, eligibleForDiscount, taxPercentage, stockAmount, purchasedAmount, creditTerm);
