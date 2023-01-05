const booksConteiner = document.querySelector('.booksContainer')
const newBookBtn = document.querySelector('.newBook')
const submitNewBtn = document.querySelector('.submitNewBook')
const bookForm = document.querySelector('.addNewBookForm')
const bookTitle = document.querySelector('#title')
const bookAuthor = document.querySelector('#author')
const bookPages = document.querySelector('#pages')
const bookRead = document.querySelector('#read')

submitNewBtn.addEventListener("click", denySubmit)

let books = []

//Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}; pages: ${pages}; ${read}`
    }
}

//Display books on the array
function displayBooks() {
    for (let i = 0; i < books.length; i++) {
        let disBook = document.createElement('div')
        disBook.textContent = books[i].title
        booksConteiner.appendChild(disBook)
    } 
}

//Add books to array 
function addBooks() {
    const book = new Book(title, author, pages, read)
    books.push(book)
    displayBooks()
}

// Validate Form/Book values
function validateForm() {
    if (bookTitle.value !== '' && bookAuthor.value !== '' && bookPages.value !== '' 
    && bookPages.value > 0) {
        if (checkbox.checked) {
            addBooks(bookTitle.value, bookAuthor.value, bookPages.value, true)
        } else {
            addBooks(bookTitle.value, bookAuthor.value, bookPages.value, false)
        }
    }
    bookForm.reset()
}

// Deny form submit
function denySubmit(event) {
    event.preventDefault()
}

addBooks()