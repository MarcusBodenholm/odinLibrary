class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
};
Book.prototype.toggleRead = function () {
  if (this.read) {
    this.read = false;
  } else {
    this.read = true;
  }
  return this;
}

class Card {
  constructor() {
    this.card = document.createElement('div');
    this.card.classList.add('library-card');
    this.title = document.createElement('h3');
    this.title.classList.add('card-title');
    this.author = document.createElement('h4');
    this.author.classList.add('card-author');
    this.author.innerHTML = "Author:";
    this.authorText = document.createElement('p');
    this.authorText.classList.add('card-text');
    this.pages = document.createElement('h4');
    this.pages.classList.add('card-pages');
    this.pages.innerHTML = "Pages:"
    this.pageText = document.createElement('p');
    this.pageText.classList.add('card-text');
    this.read = document.createElement('h4');
    this.read.classList.add('card-read');
    this.read.innerHTML = "Status:"
    this.statusText = document.createElement('p');
    this.statusText.classList.add('card-text');
    this.toggleRead = document.createElement('button');
    this.toggleRead.classList.add('toggle-read');
    this.toggleRead.innerHTML = "Read?";
    this.deleteBook = document.createElement('img');
    this.deleteBook.classList.add('delete-book');
    this.deleteBook.src = "./trash-svgrepo-com.svg";
    this.deleteBook.alt = "delete";
  }
}
const library = [];

const form = {
  author: document.getElementById('author'),
  title: document.getElementById('title'),
  pages: document.getElementById('pages'),
  read: document.getElementById('read'),
  reset() {
    this.author.value = "";
    this.title.value = "";
    this.pages.value = "";
  }
}

const bookForm = document.querySelector(".create-book")
const displayFormButton = document.querySelector(".add-book");
displayFormButton.addEventListener('click', displayForm)

const libraryList = document.querySelector('.library-list');
function displayForm() {
  if (bookForm.style.display === "block") {
    bookForm.style.display = "none";
  } else {
    bookForm.style.display = "block";
  }
}

const addBookButton = document.querySelector('.form-button');
addBookButton.addEventListener('click', () => {
  displayForm();

})

function createCard() {
  const card = document.createElement('div');
  card.classList.add('library-card');
  const title = document.createElement('h3');
  title.classList.add('card-title');
  const author = document.createElement('h4');
  author.classList.add('card-author');
  author.innerHTML = "Author:"
  const pages = document.createElement('h4');
  pages.classList.add('card-pages');
  pages.innerHTML = "Pages:"
  const read = document.createElement('h4');
  read.classList.add('card-read');
  read.innerHTML = "Status:"
  const toggleRead = document.createElement('button');
  toggleRead.innerHTML = "Read?";
  toggleRead.classList.add('toggle-read');
  const deleteBook = document.createElement('img');
  deleteBook.classList.add('delete-book');
  deleteBook.src = "./trash-svgrepo-com.svg";
  deleteBook.alt = "delete";
}

function addDetails() {
  const card = new Card();
  card.title.innerHTML = "A Song of Ice and Fire";
  card.authorText.innerHTML = "George R. R. Martin";
  card.pageText.innerHTML = "314";
  card.statusText.innerHTML = "Not read";
  card.card.appendChild(card.title);
  card.card.appendChild(card.author);
  card.card.appendChild(card.authorText);
  card.card.appendChild(card.pages);
  card.card.appendChild(card.pageText);
  card.card.appendChild(card.read);
  card.card.appendChild(card.statusText);
  card.card.appendChild(card.toggleRead);
  card.card.appendChild(card.deleteBook);
  libraryList.appendChild(card.card);
}


