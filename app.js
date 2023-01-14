//Add Local Storage later + UI Improvements

// Variables
const booksConteiner = document.querySelector('.booksContainer')
const newBookBtn = document.querySelector('.newBook')
const submitNewBtn = document.querySelector('.submitNewBook')
const bookForm = document.querySelector('.addNewBookForm')
const bookFormContainer = document.querySelector('.formConteiner') 
const bookTitle = document.querySelector('#title')
const bookAuthor = document.querySelector('#author')
const bookPages = document.querySelector('#pages')
const bookRead = document.querySelector('#read')

let books = []
let book 

//Buttons
newBookBtn.addEventListener("click", () => {
    bookFormContainer.style.display = 'block'
    bookFormContainer.classList.toggle('show')
})
submitNewBtn.addEventListener("click", denySubmit)
submitNewBtn.addEventListener("click", validateForm)

//Constructor
class Book {
    constructor (title, author, pages, read) {
        this.title = form.title.value
        this.author = form.author.value
        this.pages = form.pages.value
        this.read = form.read.checked
    }
}

// Renders library visual
function render() {
    const displays = document.querySelectorAll('.book')
    displays.forEach(book => booksConteiner.removeChild(book))

    for (let i = 0; i < books.length; i++) {
        displayBooks(books[i])
    }
}

//Display books on the array
function displayBooks(item) {   

        let bookDisplay = document.createElement('div')
        let displayTitle = document.createElement('p')
        let displayAuthor = document.createElement('p')
        let displayPages = document.createElement('p')
        let displayRead = document.createElement('button')
        let deleteBtn = document.createElement('button')
        
        bookDisplay.classList.add('book')
        deleteBtn.textContent = 'DELETE'
        deleteBtn.classList.add('deleteBtn')
        displayTitle.textContent = `"${item.title}"`
        displayAuthor.textContent = `By ${item.author}`
        displayPages.textContent = `${item.pages} pages`
        
        if (item.read === false) {
            displayRead.textContent = "Not Read"
            displayRead.style.backgroundColor = "red"
        }else {
            displayRead.textContent = "Read"
            displayRead.style.backgroundColor = "green"
        }
         
        bookDisplay.appendChild(displayTitle)
        bookDisplay.appendChild(displayAuthor)
        bookDisplay.appendChild(displayPages)
        bookDisplay.appendChild(displayRead)
        bookDisplay.appendChild(deleteBtn)
        booksConteiner.appendChild(bookDisplay)

        displayRead.addEventListener("click", () => {
            item.read = !item.read
            render()
        })

        deleteBtn.addEventListener("click", () => {
            books.splice(books.indexOf(item),1)
            render()
        })
}

//Add books to array 
function addBooks() {
    book = new Book(title, author, pages, read)
    books.push(book)
    render()
}

// Validate Form/Book values
function validateForm() {
    if (bookTitle.value !== '' && bookAuthor.value !== '' && bookPages.value !== '' 
    && bookPages.value > 0) { 
        addBooks(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
        bookFormContainer.style.display = 'none'
        bookFormContainer.classList.toggle('show')
    }
    bookForm.reset()
}

// Deny form submit
function denySubmit(event) {
    event.preventDefault()
}
