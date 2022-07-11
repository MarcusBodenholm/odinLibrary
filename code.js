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
    // Create the library card div and add class
    this.card = document.createElement('div');
    this.card.classList.add('library-card');
    // Create the title element and add class
    this.title = document.createElement('h3');
    this.title.classList.add('card-title');
    // Create the author element and add class
    this.author = document.createElement('h4');
    this.author.classList.add('card-author');
    this.author.innerHTML = "Author:";
    this.authorText = document.createElement('p');
    this.authorText.classList.add('card-text');
    // Create the page count, and add class
    this.pages = document.createElement('h4');
    this.pages.classList.add('card-pages');
    this.pages.innerHTML = "Pages:"
    this.pageText = document.createElement('p');
    this.pageText.classList.add('card-text');
    // Create the read status element, and add class
    this.read = document.createElement('h4');
    this.read.classList.add('card-read');
    this.read.innerHTML = "Status:"
    this.statusText = document.createElement('p');
    this.statusText.classList.add('card-text');
    // Create the read status update button, and add class
    this.toggleRead = document.createElement('button');
    this.toggleRead.classList.add('toggle-read');
    this.toggleRead.innerHTML = "Read";
    // Create the delete element, and add class and attributes
    this.deleteBook = document.createElement('img');
    this.deleteBook.classList.add('delete-book');
    this.deleteBook.src = "./trash-svgrepo-com.svg";
    this.deleteBook.alt = "delete";
  }
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
    let button = document.getElementById(e.target.id);
    if (button.innerHTML === "Read") {
      console.log(button)
      button.innerHTML = "Not Read";
    } else {
      console.log(button)
      button.innerHTML = "Read";
    }
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
    addBookToArray(this.title.value, this.author.value, this.pages.value, this.read.value);
    this.reset();
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
  form.addBook();
  displayForm();
})

const bookForm = document.querySelector(".create-book");

const libraryList = document.querySelector('.library-list');

function addBookToDom(obj, idx) {
  const card = new Card();
  card.title.innerHTML = obj.title;
  card.authorText.innerHTML = obj.author;
  card.pageText.innerHTML = obj.pages;
  card.statusText.innerHTML = obj.read ? "Read" : "Not read";
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

addBookToArray("Harry Potter", "J.K Rowling", 151, false)
addBookToArray("Harry Potter 2", "J.K Rowling", 345, false)
addBookToArray("Lord of the Rings", "J.R.R Tolkien", 1000, true)


