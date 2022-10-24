const books = JSON.parse(localStorage.getItem('data')) || [];
const addButton = document.querySelector('#addButton');
const form = document.querySelector('form');
const booksContainer = document.querySelector('.books-container')

const getData = ()=>{
  //booksContainer.innerHTML='';
  books.forEach((book, index) => {
    const bookContent = document.createElement('div');
    const text = `
      <p class="book-title">${book.title}</p>
      <p class="book-author">${book.author}</p>
      <button type="button" id="book-${book.id}">Remove</button>
      <hr>
    `
    bookContent.innerHTML=text;
    booksContainer.appendChild(bookContent);
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
  title.value='';
  author.value='';
  console.log('books',books)
  getData();
})
getData();

