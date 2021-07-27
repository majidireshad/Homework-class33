//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
    coverURL: 'https://miro.medium.com/max/1049/0*CmkOVjGAnm3D0rTo',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
    coverURL:
      'https://www.kurzweilai.net/images/The-Most-Human-Human-Paperback-Front-Cover.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
    coverURL:
      'https://static.epub.vn/epubvn-image/optimized-cover1565689052299-220px-the_pragmatic_programmer.jpg',
  },
];

function createBookList(books) {
  const listULTemp = document.createElement('ul');
  listULTemp.setAttribute('style', 'display: flex; flex-direction: row;');
  books.forEach((bookObject) => {
    const nameAuthor = document.createElement('p');
    const textNode = document.createTextNode(
      `${bookObject.title} - ${bookObject.author}`
    );
    nameAuthor.appendChild(textNode);
    const bookImageURL = document.createElement('img');
    bookImageURL.setAttribute('src', `${bookObject.coverURL}`);
    bookImageURL.setAttribute('style', 'width: 30%;');
    bookImageURL.setAttribute('alt', 'book-list-cover');
    const listTemplate = document.createElement('li');

    listTemplate.appendChild(nameAuthor);
    listTemplate.appendChild(bookImageURL);
    if (bookObject.alreadyRead === true) {
      listTemplate.setAttribute('style', 'background-color: green;');
    } else {
      listTemplate.setAttribute('style', 'background-color: red;');
    }
    //styles
    listTemplate.style.padding = '20px';
    listTemplate.style.width = '30%';
    listTemplate.style.listStyle = 'none';
    listTemplate.style.margin = '10px';

    listULTemp.appendChild(listTemplate);
  });

  return listULTemp;
}
const ulElement = createBookList(myBooks);
document.querySelector('#bookList').appendChild(ulElement);
