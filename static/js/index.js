// let books = [];
// // =================================================================================================
// const form = document.querySelector('form');
// const booksContainer = document.querySelector('.books-container');
// // =================================================================================================
// const showBook = (item) => {
//   if (booksContainer.innerHTML === 'No thing books here') {
//     booksContainer.innerHTML = '';
//   }
//   const bookContent = document.createElement('div');
//   const text = `
//     <p class="book-title">${item.title}</p>
//     <p class="book-author">${item.author}</p>
//     <button onclick="remove(${item.id})" type="button" id="book-${item.id}">Remove</button>

//   `;
//   bookContent.innerHTML = text;
//   booksContainer.appendChild(bookContent);
// };
// // =================================================================================================
// const getData = () => {
//   books = JSON.parse(localStorage.getItem('data')) || [];
//   if (books?.length > 0) {
//     booksContainer.innerHTML = '';
//     books.forEach((book) => {
//       showBook(book);
//     });
//   } else {
//     booksContainer.innerHTML = 'No thing books here';
//   }
// };
// // =================================================================================================
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const { title, author } = e.target;
//   if (title.value === '' || author.value === '') {
//     // eslint-disable-next-line no-alert
//     alert('Please enter a title and author');
//   } else {
//     const data = {
//       id: books?.length + 1,
//       title: title.value,
//       author: author.value,
//     };
//     books.push(data);
//     localStorage.setItem('data', JSON.stringify(books));
//     showBook(data);
//     title.value = '';
//     author.value = '';
//   }
// });
// // =================================================================================================
// // eslint-disable-next-line no-unused-vars
// function remove(c) {
//   const updatedData = books.filter((book) => book.id !== c);
//   localStorage.setItem('data', JSON.stringify(updatedData));
//   getData();
// }
// getData();
// // =================================================================================================
// start class Awesome

const form = document.querySelector('form');
const booksContainer = document.querySelector('.books-container');
class Awesome {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = [];
  }
  show() {
    if (booksContainer.innerHTML === 'No thing books here') {
          booksContainer.innerHTML = '';
        }
        const bookContent = document.createElement('div');
        const text = `
          <p class="book-title">${this.title}</p>
          <p class="book-author">${this.author}</p>
          <button onclick="remove(${this.title})" type="button" id="book-${this.title}">Remove</button>
      
        `;
        bookContent.innerHTML = text;
        booksContainer.appendChild(bookContent);
  }
  add() {
    console.log('ADDED');
    const data = {
      title: this.title, 
      author: this.author
    };
    this.books.push(data);
    
    const dataFromStorage = JSON.parse(localStorage.getItem('data'));
    let id = 1;
    if(dataFromStorage){
      id = dataFromStorage.length + 1;
    }
    data.id = id;
    console.log(data)
    let allData = [data]
    if(dataFromStorage){
     allData = [...dataFromStorage,data]
    }
    localStorage.setItem('data', JSON.stringify(allData));
    title.value = '';
    author.value = '';
  }
  }

this.addBtn = document.querySelector('#addButton');
this.addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const book1 = new Awesome();
  book1.title = document.getElementById('title').value;
  book1.author = document.getElementById('author').value;
  book1.add();
  book1.show();
  console.log(book1);
});