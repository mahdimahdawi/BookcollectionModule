import {
  bookList, addButton, BookTitle, BookAuthor,
} from './ui.js';

export const books = [];

export const displayBook = (b) => {
  const bookDiv = document.createElement('div');
  bookDiv.className = 'book-div';
  bookDiv.innerHTML += `<p>"${b.title}" by ${b.author}</p>
  <button class="remove-btn">Remove</button>`;
  bookList.appendChild(bookDiv);
};
export class BookClass {
  constructor(bookTitle, bookAuthor) {
    this.title = bookTitle;
    this.author = bookAuthor;
  }

  AddBook() {
    books.push(this);
    displayBook(this);
    setTimeout(window.location.reload(), 1000);
    localStorage.setItem('book', JSON.stringify(books));
    this.title.value = '';
    this.author.value = '';
  }

  removeBook(k, index) {
    this.book = k;
    k.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(k));
    setTimeout(window.location.reload(), 1000);
  }
}

export const getBook = () => {
  let localBooks = [];
  const localData = localStorage.getItem('book');
  localBooks = JSON.parse(localData);
  if (localBooks) {
    localBooks.forEach((bk) => {
      displayBook(bk);
      books.push(bk);
    });
  }
};

// Event listener for add button
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const bk = new BookClass(BookTitle.value, BookAuthor.value);
  bk.AddBook();
});

getBook();

const rm = document.querySelectorAll('.remove-btn');
rm.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const bk = new BookClass();
    bk.removeBook(books, i);
  });
});

export { addButton, rm };