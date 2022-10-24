const books = JSON.parse(localStorage.getItem('data')) || [];
const addButton = document.querySelector('#addButton');
const form = document.querySelector('form');
const booksContainer = document.querySelector('.books-container')
//showBook function
const showBook = (item) => {
  const bookContent = document.createElement('div');
  const text = `
    <p class="book-title">${item.title}</p>
    <p class="book-author">${item.author}</p>
    <button type="button" id="book-${item.id}">Remove</button>
    <hr>
  `
  bookContent.innerHTML=text;
  booksContainer.appendChild(bookContent);
}

const getData = ()=>{
  booksContainer.innerHTML='';
  books.forEach((book, index) => {
    showBook(book);
  })
}
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const {title, author}= e.target
  const data = {
    id: books.length + 1,
    title: title.value,
    author: author.value,
  }
  books.push(data);
  localStorage.setItem('data', JSON.stringify(books));
  showBook(data);
  title.value='';
  author.value='';
  console.log('books',books)
  
})
getData();

