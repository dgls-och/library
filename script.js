const display = document.querySelector(".books-display");
const inputs = document.querySelectorAll("form input");
const submitBttn = document.querySelector("form button");

const myLibrary = [];

function Book(title, author, publisher, dateOfPublication, pages, read) {
    if (!new.target) {
        throw 'Error: the "new" keyword must preceed function';
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.dateOfPublication = dateOfPublication;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeReadStatus = function () {
    if (this.read == false) {
        this.read = true;
    } else {
        this.read = false;
    }
}

function addBookToLibrary(title, author, publisher, dateOfPublication, pages, read) {
    let newBook = new Book(title, author, publisher, dateOfPublication, pages, read);
    myLibrary.push(newBook);
}

function displayLibraryBooks(library) {
    myLibrary.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.setAttribute("class", "book");

        let bookId = document.createElement("p");
        bookId.setAttribute("id", "book-id");
        bookId.textContent = book.id;

        let bookTitle = document.createElement("h2");
        bookTitle.setAttribute("id", "book-title");
        bookTitle.textContent = book.title;

        let bookAuthor = document.createElement("p");
        bookAuthor.setAttribute("id", "book-author");
        bookAuthor.textContent = book.author;

        let bookPublisher = document.createElement("p");
        bookPublisher.setAttribute("id", "book-publisher");
        bookPublisher.textContent = book.publisher;

        let dateOfPublication = document.createElement("p");
        dateOfPublication.setAttribute("id", "date-of-publication");
        dateOfPublication.textContent = book.dateOfPublication;

        let bookPages = document.createElement("p");
        bookPages.setAttribute("id", "book-pages");
        bookPages.textContent = book.pages;

        let readStatus = document.createElement("p");
        readStatus.setAttribute("id", "read-status");
        readStatus.textContent = (book.read == true) ? "Read" : "Yet to read";

        let bookRemovingBttn = document.createElement("button");
        bookRemovingBttn.setAttribute("data-id", book.id);
        bookRemovingBttn.innerText = "Delete";
        bookRemovingBttn.classList.add("delete-bttn", "bttn");
        bookRemovingBttn.addEventListener('click', e => {
            e.preventDefault();
            removeBook(bookRemovingBttn);
        });

        let readStatusBttn = document.createElement("button");
        readStatusBttn.dataset.id = book.id;
        readStatusBttn.innerText = "Toggle status";
        readStatusBttn.classList.add("toggle-bttn", "bttn")
        readStatusBttn.addEventListener('click', e => {
            e.preventDefault();
            toggleReadStatus(readStatusBttn);
        });

        const bookBttnWrapper = document.createElement("div");
        bookBttnWrapper.classList.add("book-bttn-wrapper");
        bookBttnWrapper.appendChild(bookRemovingBttn);
        bookBttnWrapper.appendChild(readStatusBttn);

        bookCard.appendChild(bookId);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPublisher);
        bookCard.appendChild(dateOfPublication);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(bookBttnWrapper);
        display.appendChild(bookCard);
    });
}

displayLibraryBooks(myLibrary);

submitBttn.addEventListener('click', e => {
    e.preventDefault();
    let title;
    let author;
    let publisher;
    let dateOfPublication;
    let pages;
    let read;
    inputs.forEach(input => {
        switch (true) {
            case input.id == "title":
                title = input.value;
                input.value = "";
                break;
            case input.id == "author":
                author = input.value;
                input.value = "";
                break;
            case input.id == "publisher":
                publisher = input.value;
                input.value = "";
                break;
            case input.id == "year-of-publication":
                dateOfPublication = input.value;
                input.value = "";
                break;
            case input.id == "pages":
                pages = input.value;
                input.value = "";
                break;
            case input.id == "read-status":
                read = input.checked;
                input.checked = false;
        }
    });
    addBookToLibrary(title, author, publisher, dateOfPublication, pages, read);
    display.textContent = "";
    displayLibraryBooks(myLibrary);
    document.querySelector("dialog").close();
});

function removeBook(button) {
    const targetIndex = myLibrary.findIndex(book => book.id == button.dataset.id);
    if (targetIndex !== -1) {
        myLibrary.splice(targetIndex, 1);
    }
    display.textContent = "";
    displayLibraryBooks(myLibrary);
}

function toggleReadStatus(button) {
    myLibrary.forEach(book => {
        if (book.id == button.dataset.id) {
            book.changeReadStatus();
            display.textContent = "";
            displayLibraryBooks(myLibrary);
        }
    });
}