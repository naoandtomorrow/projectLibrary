// Function is to find accounts by their id number 
function findAccountById(accounts, id) {
  return accounts.find(account => account.id ===id);
}

// function is to sort accounts by their last names 
function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b)=> a.name.last > b.name.last? 1:-1)
}
// function is to see the total number of borrows an account has made on a book 
function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0;
  for (let i=0; i < books.length; i++){
    if (books.borrows.length > 0){
      for (let j=0; j < books[i].borrows.length;){
        if (book[i].borrows[j].id=== account.id){
          numberOfBorrows++
        }
      }
    }
  }
return numberOfBorrows;
}
// function is to see how many books an account has 
function getBooksPossessedByAccount(account, books, authors) {
  const accountID = account.id;
  const checkedOutBooks = books.filter((book) => {
    const lastBorrow = book.borrows[0];
    return lastBorrow.id === accountID && !lastBorrow.returned;
  });
  checkedOutBooks.forEach((book) => {
    const author = authors.find((a) => a.id === book.authorId);
    book["author"] = author;
  });
  return checkedOutBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
// Function is to find accounts by their id number 
function findAccountById(accounts, id) {
  return accounts.find(account => account.id ===id);
}

// function is to sort accounts by their last names 
function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b)=> a.name.last > b.name.last? 1:-1)
}
// function is to see the total number of borrows an account has made on a book 
function getTotalNumberOfBorrows(account, books) {
  let numberOfBorrows = 0;
  for (let i=0; i < books.length; i++){
    if (books.borrows.length > 0){
      for (let j=0; j < books[i].borrows.length;){
        if (book[i].borrows[j].id=== account.id){
          numberOfBorrows++
        }
      }
    }
  }
return numberOfBorrows;
}
// function is to see how many books an account has 
function getBooksPossessedByAccount(account, books, authors) {
  const accountID = account.id;
  const checkedOutBooks = books.filter((book) => {
    const lastBorrow = book.borrows[0];
    return lastBorrow.id === accountID && !lastBorrow.returned;
  });
  checkedOutBooks.forEach((book) => {
    const author = authors.find((a) => a.id === book.authorId);
    book["author"] = author;
  });
  return checkedOutBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

