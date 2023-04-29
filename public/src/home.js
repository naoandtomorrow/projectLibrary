// function gets total count of books
function getTotalBooksCount(books) {
  return books.length;
}
// function gets the total amount of accounts 
function getTotalAccountsCount(accounts) {
  return accounts.length;
}
// function shows how many books are unavailable
function getBooksBorrowedCount(books) {
  return books.reduce((count, book) => {
    const [borrowed] = book.borrows;
    if (!borrowed.returned) {
      count++;
    }
    return count;
  }, 0);
}
// function gets the books who are most common by genre
function getMostCommonGenres(books) {
  const genres = {};
  for (let book of books) {
    const { genre } = book;
    if (genre in genres) {
      genres[genre]++;
    } else {
      genres[genre] = 1;
    }
  }
  const sortedGenres = Object.keys(genres).sort((a, b) => genres[b] - genres[a]).map(name => ({ name, count: genres[name] }));
  return sortedGenres.slice(0, 5);
}
// function gets all the most popular books 
function getMostPopularBooks(books) {
  const borrows = books.reduce((acc, book) => {
    acc[book.title] = book.borrows.length;
    return acc;
  }, {});
  const sortedBooks = Object.keys(borrows).sort((a, b) => borrows[b] - borrows[a]).map(name => ({ name, count: borrows[name] }));
  return sortedBooks.slice(0, 5);
}
// function gets popular authors
function getMostPopularAuthors(books, authors) {
  const authorBorrows = books.reduce((acc, book) => {
    const author = authors.find(author => author.id === book.authorId);
    const name = `${author.name.first} ${author.name.last}`;
    if (!acc[name]) {
      acc[name] = book.borrows.length;
    } else {
      acc[name] += book.borrows.length;
    }
    return acc;
  }, {});
  const sortedAuthors = Object.keys(authorBorrows).sort((a, b) => authorBorrows[b] - authorBorrows[a]).map(name => ({ name, count: authorBorrows[name] }));
  return sortedAuthors.slice(0, 5);
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
