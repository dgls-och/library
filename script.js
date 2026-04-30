const display = document.querySelector(".wrapper");

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

function addBookToLibrary(title, author, publisher, dateOfPublication, pages, read) {
    let newBook = new Book(title, author, publisher, dateOfPublication, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary(
    'A Man and His Mission'
    , 'Adrian Cluade Gild'
    , 'Gospel Advocate'
    , '2006'
    , 300
    , true
);

addBookToLibrary(
    'The DaVincci Code'
    , 'Dan Brown'
    , 'N/A'
    , 'N/A'
    , 300
    , true
);

addBookToLibrary(
    'The Book of Revelation'
    , 'The Holy Spirit'
    , 'John, the apostle'
    , 'A. D. 90'
    , NaN
    , false
);

console.table(myLibrary);

function displayLibraryBooks(library) {
    myLibrary.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.setAttribute("class", "book");

        let bookId = document.createElement("p");
        bookId.setAttribute("id", "book-id");
        bookId.textContent = book.id;

        let bookTitle = document.createElement("p");
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

        bookCard.appendChild(bookId);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPublisher);
        bookCard.appendChild(dateOfPublication);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(readStatus);
        display.appendChild(bookCard);
    });
}

displayLibraryBooks(myLibrary);
