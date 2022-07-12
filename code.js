"use strict";

import { Card } from "./modules/card.js";

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

const library = [];

document.addEventListener('click', (e) => {
  if (e.target.alt === "delete") {
    const id = e.target.parentElement.id;
    library.splice(id, 1);
    renderLibrary();
  }
})

document.addEventListener('click', (e) => {
  const idSplit = e.target.id.split(' ');
  if (idSplit[1] === "status") {
    library[idSplit[0]].toggleRead();
    renderLibrary();
  }
})

const form = {
  author: document.getElementById('author'),
  title: document.getElementById('title'),
  pages: document.getElementById('pages'),
  read: document.getElementById('read'),
  reset() {
    this.author.value = "";
    this.title.value = "";
    this.pages.value = "";
  },
  addBook() {
    if (isNaN(Number(this.pages.value))) {
      this.pages.value = "";
      alert('Please input numbers in the pages field');
    } else {
      addBookToArray(this.title.value, this.author.value, this.pages.value, this.read.value);
      this.reset();
    }
  }
}

function displayForm() {
  if (bookForm.style.display === "block") {
    bookForm.style.display = "none";
  } else {
    bookForm.style.display = "block";
  }
}

const addBookButton = document.querySelector('.form-button');

const displayFormButton = document.querySelector(".add-book");

displayFormButton.addEventListener('click', displayForm)

addBookButton.addEventListener('click', () => {
  if (form.author.value !== "" &&
    form.title.value !== "" &&
    form.pages.value !== "") {
    form.addBook();
    displayForm();
  } else if (form.pages.value === "") {
    alert('Please fill in a number of pages')
  } else {
    alert('Please fill in all the fields');
  }
})

const bookForm = document.querySelector(".create-book");

const libraryList = document.querySelector('.library-list');

function addBookToDom(obj, idx) {
  const card = new Card();
  card.title.innerHTML = obj.title;
  card.authorText.innerHTML = obj.author;
  card.pageText.innerHTML = obj.pages;
  card.statusText.innerHTML = obj.read ? "Read" : "In Progress";
  card.toggleRead.innerHTML = "Update status"
  card.toggleRead.id = `${idx} status`;
  card.card.appendChild(card.title);
  card.card.appendChild(card.author);
  card.card.appendChild(card.authorText);
  card.card.appendChild(card.pages);
  card.card.appendChild(card.pageText);
  card.card.appendChild(card.read);
  card.card.appendChild(card.statusText);
  card.card.appendChild(card.toggleRead);
  card.card.appendChild(card.deleteBook);
  card.card.id = idx;
  libraryList.appendChild(card.card);
}

function renderLibrary() {
  while (libraryList.lastElementChild) {
    libraryList.removeChild(libraryList.lastElementChild)
  }
  library.forEach((el, idx) => {
    addBookToDom(el, idx);
  })
}

function addBookToArray(title, author, pages, read) {
  library.push(new Book(title, author, pages, read))
  renderLibrary();
}

function removeContent() {
  while (libraryList.lastElementChild) {
    libraryList.removeChild(libraryList.lastElementChild)
  }
}
const removeButton = document.getElementById('remove-content');
removeButton.addEventListener('click', removeContent);

function dummyContent() {
  addBookToArray("The Way of Kings", "Brandon Sanderson", 1007, true);
  addBookToArray("A Game of Thrones", "George R. R. Martin", 694, true);
  addBookToArray("The Name of the Wind", "Patrick Rothfuss", 662, false);
  addBookToArray("The Return of the King", "J. R. R. Tolkien", 416, true);
  addBookToArray("American Gods", "Neil Gaiman", 465, false);
  addBookToArray("The Last Unicorn", "Peter S. Beagle", 218, false);
};
const dummyButton = document.getElementById('dummy-content');
dummyButton.addEventListener('click', dummyContent);
