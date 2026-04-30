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
    , true
);

console.table(myLibrary);

function displayLibraryBooks(library) {
    myLibrary.forEach((book) => console.log(book));
}

displayLibraryBooks(myLibrary);
