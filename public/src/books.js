// this function finds authors by their id's //
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}
// this function is used to find books by their id number //
function findBookById(books, id) {
  return books.find(book => book.id === id);
}
// this function is used to see what books are borrowed and avaialble 
function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = [];
  const returnedBooks = [];
  for (let book of books) {
    const { borrows } = book;
    if (borrows.some(borrow => !borrow.returned)) {
      borrowedBooks.push(book);
    } else {
      returnedBooks.push(book);
    }
  }
  return [borrowedBooks, returnedBooks];
}
// this function is to check the borrow records based on books and accounts
function getBorrowersForBook(book, accounts) {
  const borrowRecords = book.borrows;
  const borrowers = borrowRecords.map(record => {
    const account = accounts.find(acc => acc.id === record.id);
    return {...record, ...account};
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
