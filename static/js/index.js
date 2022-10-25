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
// class Awesome {
//   constructor() {
//     this.title = document.querySelector('#title');
//     this.author = document.querySelector('#author');
//     this.addBtn = document.querySelector('#addButton');
//     this.addBtn.addEventListener('click', () => {
//       console.log('yes');
//     });
//   }
// }