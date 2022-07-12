export class Card {
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