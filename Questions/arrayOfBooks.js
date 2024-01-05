// A simple practise program that is displays which friends have borrowed books

const friends = [
    { name: 'Alice', books: ['Harry Potter', 'To Kill a Mockingbird'], borrowedDates: ['2022-05-05', '2022-05-10'] },
    { name: 'Tom', books: ['War and Peace', 'Romeo and Juliet'], borrowedDates: ['2022-06-20', '2022-07-05'] },
    { name: 'Harry', books: ['The Lord of the Rings', 'The Shining'], borrowedDates: ['2022-03-15', '2022-08-10'] },
    { name: 'Grey', books: ['Dark Matter', 'How to Talk to People'], borrowedDates: ['2022-04-25', '2022-11-05'] }
  ];
  
  const masterListOfBooks = ['Mary Poppins', 'The Bronze horseman', 'Harry Potter', 'To Kill a Mockingbird', 
                             'War and Peace', 'Romeo and Juliet', 'The Lord of the Rings', 'The Shining', 
                             'Dark Matter', 'How to Talk to People', '1984', 'Pride and Prejudice'];
  
  function displayBooksAndDatesSorted(friendsList) {
    const allBooks = friendsList.flatMap(friend =>
        friend.books.map((book, index) => ({
            name: friend.name,
            book,
            date: friend.borrowedDates[index]
        }))
    );
  
    const sortedBooks = allBooks.sort((a, b) => new Date(b.date) - new Date(a.date));
  
    sortedBooks.forEach(book => {
        console.log(`%c${book.name} borrowed ${book.book} on ${book.date}`, 'color: blue');
    });
  }
  
  function findUnborrowedBooks(friendsList, masterList) {
    const borrowedBooks = new Set(friendsList.flatMap(friend => friend.books));
    const unborrowedBooks = masterList.filter(book => !borrowedBooks.has(book));
  
    console.log('%cBooks not being borrowed:', 'color: green; font-weight: bold');
    unborrowedBooks.forEach(book => {
        console.log(`%c- ${book}`, 'color: green');
    });
  }
  
  displayBooksAndDatesSorted(friends);
  findUnborrowedBooks(friends, masterListOfBooks);
