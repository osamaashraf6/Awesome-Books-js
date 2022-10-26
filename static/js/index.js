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

this.addBtn = document.querySelector('#addButton');
this.addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Awesome();
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  // eslint-disable-next-line no-use-before-define
  books.add(book);
});

const books = new Books();
books.getData();
