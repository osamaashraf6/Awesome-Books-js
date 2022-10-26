// eslint-disable-next-line max-classes-per-file
const booksContainer = document.querySelector('.books-container');
class Awesome {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Books {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('data')) || [];
  }

  add(data) {
    if (data.title === '' || data.author === '') {
      // eslint-disable-next-line no-alert
      alert('Please enter a title and author');
    } else {
      const id = this.list.length + 1;
      data.id = id;
      this.list.push(data);
      localStorage.setItem('data', JSON.stringify(this.list));
      this.show(data);
    }
  }

  remove(c) {
    const updatedData = this.list.filter((book) => book.id !== c);
    this.list = updatedData;
    localStorage.setItem('data', JSON.stringify(updatedData));
    this.getData();
  }

  // eslint-disable-next-line class-methods-use-this
  show(item) {
    if (booksContainer.innerHTML === 'No thing books here') {
      booksContainer.innerHTML = '';
    }
    const bookContent = document.createElement('div');
    const text = `
            <p class="book-title">${item.title}</p>
            <p class="book-author">${item.author}</p>
            <button onclick="books.remove(${item.id})" type="button" id="book-${item.id}">Remove</button>
        
          `;
    bookContent.innerHTML = text;
    booksContainer.appendChild(bookContent);
  }

  getData() {
    if (this.list.length > 0) {
      booksContainer.innerHTML = '';
      this.list.forEach((book) => {
        this.show(book);
      });
    } else {
      booksContainer.innerHTML = 'No thing books here';
    }
  }
}

const message = document.querySelector('.message');
this.addBtn = document.querySelector('#addButton');
this.addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Awesome();
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  // eslint-disable-next-line no-use-before-define
  books.add(book);
  message.classList.remove('display');
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

const listLink = document.querySelector('#list');
const addNewLink = document.querySelector('#addNew');
const contactLink = document.querySelector('#contact');
const seeList = document.querySelector('#seeList');
const sectionOne = document.querySelector('#sectionone');
const sectionTwo = document.querySelector('#sectiontwo');
const sectionThree = document.querySelector('#sectionthree');
const close = document.querySelector('#close');
const books = new Books();
books.getData();

listLink.addEventListener('click', () => {
  sectionOne.classList.remove('display');
  sectionTwo.classList.add('display');
  sectionThree.classList.add('display');
});
addNewLink.addEventListener('click', () => {
  sectionOne.classList.add('display');
  sectionTwo.classList.remove('display');
  sectionThree.classList.add('display');
});
contactLink.addEventListener('click', () => {
  sectionOne.classList.add('display');
  sectionTwo.classList.add('display');
  sectionThree.classList.remove('display');
});
seeList.addEventListener('click', () => {
  sectionOne.classList.remove('display');
  sectionTwo.classList.add('display');
  sectionThree.classList.add('display');
  message.classList.add('display');
});

const time = document.querySelector('#timeText');
const date = new Date();
time.textContent = `Today is ${date.toDateString()}`;
close.addEventListener('click', () => {
  message.classList.add('display');
});