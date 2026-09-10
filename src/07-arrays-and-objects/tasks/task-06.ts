/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

let borrowingAndi = borrowings.filter(b=> b.student === "Andi" );
console.log(borrowingAndi);

let information =  borrowings.map(b => {
    let book = books.find(i => i.id === b.bookId);
    return{
        student: b.student,
        title: book?.title,
        category: book?.category,
        days: b.days
    };
})
console.log(information);

let programmingBorrwers = information.filter(i =>i.category === "Programming");
console.log("Programming Book")
console.log(programmingBorrwers);

let totalTransaction = borrowings.length;
console.log(totalTransaction);

let totalDays = borrowings.reduce((sum,s) => sum+ s.days,0);
let average =  totalDays/borrowings.length;
console.log(average.toFixed(2));

let borrowedBook = information.filter(i =>i.days > 7)
console.log(borrowedBook);