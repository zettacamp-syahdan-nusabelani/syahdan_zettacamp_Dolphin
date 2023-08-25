function BookPurchasing(bookDetails, eligibleForDiscount, taxPercentage, stockAmount, purchasedAmount) {
  if (purchasedAmount === 0) {
    console.log('You buy no book.');
    return;
  }

  const { title, author, price } = bookDetails;

  const bookDiscount = eligibleForDiscount ? (price * 5) / 100 : 0;
  const bookDiscountPercentage = `5%`;
  const bookTax = price * (taxPercentage / 100);
  const bookAfterDiscount = price - bookDiscount;
  const bookAfterTax = bookTax + bookAfterDiscount;
  const taxDiscount = bookTax + bookAfterDiscount;
  const totalAmountPay = (taxDiscount * purchasedAmount).toFixed(2);

  if (purchasedAmount > stockAmount) {
    console.log(`Sorry, there are not enough books in stock.`);
    return;
  }

  let remainingBookStock = stockAmount;

  // For Loop Iteration
  // function contains a for loop that iterates through the number of books to be purchased (amountToPurchase). This loop handles the process of purchasing each book and displays relevant information for each iteration.

  // Check if the book is out of stock

  // Break When Book is Out of Stock:
  // there is a check that looks at the remainingBookStock variable. If the stock of the book reaches zero, meaning the book is out of stock, the loop will break using the break statement. This ensures that the loop stops when the book is no longer available.

  // Display Text Based on Stock Availability:
  // There are conditional checks that provide different messages based on the stock availability and the current iteration. If the stock of the book is exhausted (remainingBookStock === 0), it displays a message that the book is out of stock. If the iteration is less than the amountToPurchase - 1, it displays a message that the user can purchase another book. Otherwise, it displays a message that the user has purchased all the books they wanted.

  for (let i = 0; i < purchasedAmount; i++) {
    if (remainingBookStock === 0) {
      console.log(`Sorry, the book "${title}" is out of stock.`);
      break; //Exit the loop if out of stock
    }

    const totalAmountForThisBook = taxDiscount.toFixed(2);
    remainingBookStock--;

    console.log(`You're purchasing "${title}" by ${author}. Price : ${price}`);
    console.log(`🈹 DISCOUNT ${bookDiscountPercentage} 🈹`);
    console.log(`Discount for this book: $${bookDiscount}`);
    console.log(`Price after discount for this book: $${bookAfterDiscount}`);
    console.log(`Tax for this book: $${bookTax}`);
    console.log(`Price after tax for this book: $${bookAfterTax}`);
    console.log(`Amount to pay for this book: $${taxDiscount}`);
    console.log(`Remaining stock: ${remainingBookStock}`);
    console.log(`Total amount to pay for this book: $${totalAmountForThisBook}`);
    console.log('---------------------------------');

    if (remainingBookStock === 0) {
      console.log(`The book "${title}" is now out of stock.`);
    } else if (i < purchasedAmount - 1) {
      console.log(`You can purchase another book.`);
    } else {
      console.log(`You've purchased all the books you wanted.`);
    }
    console.log('----------------------------------');
  }

  console.log(`📚 TOTAL AMOUNT THAT YOU'VE TO PAY $${totalAmountPay} 📚 `);

  console.log(`${title}'s stock is now ${remainingBookStock} left`);
}

// Example usage
const bookInfo = {
  title: 'Measure What Matters',
  author: 'John Doerr',
  price: 55,
};
const eligibleForDiscount = true;
const taxPercentage = 11;
const stockAmount = 10;
const purchasedAmount = 2;

BookPurchasing(bookInfo, eligibleForDiscount, taxPercentage, stockAmount, purchasedAmount);
