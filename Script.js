class book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

const defaultBooks = [
    {
        title: 'Book 1',
        author: 'Brad Traversy',
        isbn: '12345'
    },
    {
        title: 'Book 2',
        author: 'Mehul Mohan',
        isbn: '6789'
    }
]

class UI {
    static displayBooks() {
        defaultBooks.forEach(book => UI.addBookToList(book))
    }
    static addBookToList(book) {
        const list = document.getElementById('book-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        list.appendChild(row)
    }
    static clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
    static deleteBook(target) {
        if(target.classList.contains('delete'))  {
            target.parentElement.parentElement.remove();
         }
    }
}
UI.displayBooks()

document.querySelector('#book-form').addEventListener('submit', addABook, false)

function addABook(e) {
    e.preventDefault()

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    const libro = new book(title, author, isbn);

    UI.addBookToList(libro)
    UI.clearFields()
}

document.getElementById('book-list').addEventListener('click', handleRemove)
function handleRemove(e) {
  UI.deleteBook(e.target)
}
