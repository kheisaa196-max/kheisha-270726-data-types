/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

let  book:{
  ISBN: string;
  title: string;
  author: string;
  numberOfPages: number;
  category: string;
  isAvaliable: boolean;
}={
    ISBN: "978-3-16-148410-0",
    title: "The Great Gatsby",      
    author: "F. Scott Fitzgerald",
    numberOfPages: 180,
    category: "Fiction",
    isAvaliable: true
};
//book2
let book2:{
  ISBN: string;
  title: string;
  author: string;
  numberOfPages: number;
  category: string;
  isAvaliable: boolean;
}={
    ISBN: "978-0-7432-7356-5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    numberOfPages: 277,
    category: "Fiction",
    isAvaliable: true
};
//book3
let book3:{
    ISBN: string;
    title: string;
    author: string;
    numberOfPages: number;
    category: string;
    isAvaliable: boolean;
}={
    ISBN: "978-0-452-28423-4",
    title: "To Kill a Mockingbird",         
    author: "Harper Lee",
    numberOfPages: 281,
    category: "Fiction",
    isAvaliable: false
};
console.log("==Book Data==");
console.log({book, book2, book3});