// Navigation

const newDate = document.querySelector('.date');

const menuList = document.querySelectorAll('.header-links');

// Setting the date
import { DateTime } from "./node_modules/luxon/src/luxon.js";
const d = new Date();
newDate.innerHTML = d.toLocaleString(DateTime.DATETIME_MED);

import handleNavigation from "./modules/nav.js";

menuList.forEach((element, index) => {
  element.addEventListener('click', () => {
    handleNavigation(index);
  });
});

// Booklist
// Collecting information from inputs
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const inputAdd = document.querySelector('#input-add');
const booksSection = document.querySelector('#booklist');

// Create a collection that keeps a list of books (hint: you can use an array of objects for that).
let listBooks = [];

import { generateHTML } from "./modules/books.js";
import { ReplaceBooks } from "./modules/books.js";

const book2 = new ReplaceBooks();

// Data is preserved in localStorage
window.onload = function storeData() {
  // Mantain data on the form
  let dataStored = {};
  inputTitle.addEventListener('change', (event) => {
    dataStored = { ...dataStored, inputTitle: event.target.value };
    localStorage.setItem('dataStored', JSON.stringify(dataStored));
  });

  inputAuthor.addEventListener('change', (event) => {
    dataStored = { ...dataStored, inputAuthor: event.target.value };
    localStorage.setItem('dataStored', JSON.stringify(dataStored));
  });

  if (localStorage.getItem('dataStored')) {
    dataStored = JSON.parse(localStorage.getItem('dataStored'));

    inputTitle.value = dataStored.inputTitle;
    inputAuthor.value = dataStored.inputAuthor;
  }

  // Mantain data on the book container
  if (localStorage.getItem('listBooks')) {
    listBooks = JSON.parse(localStorage.getItem('listBooks'));
    listBooks.forEach((book) => {
      const HTMLElement = document.createElement('div');
      HTMLElement.innerHTML = generateHTML(book);
      booksSection.appendChild(HTMLElement);
    });
  }
};

const bookList = document.querySelector('#booklist');

// Function to create object
inputAdd.addEventListener('click', () => {
  const book3 = new ReplaceBooks();
  book3.title = inputTitle.value;
  book3.author = inputAuthor.value;
  book3.id = listBooks.length + 1;
  listBooks.push(book3);
  book3.addBook();
});

// Removing books
bookList.addEventListener('click', (e) => {
  let deleteBook = e.target.getAttribute('id');
  deleteBook = parseInt(deleteBook.replace(/\D/g, ''), 10);
  book2.deleteBook(deleteBook);
});