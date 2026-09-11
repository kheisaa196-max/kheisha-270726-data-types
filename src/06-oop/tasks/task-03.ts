/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */
class Book{
    isbn: string;
    title: string;
    author: string;
    totalPages: number;
    private status: string;

    constructor(isbn: string, title: string, author: string, totalPages: number){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;
        this.status = "available";
    }
    borrow(): void{
        if(this.status === "available"){
            this.status = "borrowed";
            console.log(this.title + " has been borrowed ");
        }else{
            console.log(this.title + " is already borrowed ");
        }
    }
    returnBook(): void{
        if(this.status === "borrowed"){
            this.status = "available";
            console.log(this.title + " has been returned ");
        }else{
            console.log(this.title + " is not borrowed ");
        }
    }
    showInfo(): void{
        console.log("ISBN: " + this.isbn);
        console.log("Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Total pages: " + this.totalPages);
        console.log("Borrowing status: " + this.status);
    }
    isAvailable(): boolean{
        return this.status === "available";
        }
    }
const book1 = new Book(" ISBN001 ", " Harry Potter ", " J.K.Rowling ", 251);
book1.showInfo();
book1.borrow();
const book2 = new Book(" ISBN002 ", " Alaia ", " Raden Chedid ", 372);
book2.showInfo();
book2.borrow();