/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];
/**let nama = [ "Andi", "Budi", "Citra", "Deni", "Eka"];**/
let nama = [ "Eka", "Budi", "Deni", "Citra", "Andi"];
nama.sort();
console.log(nama.sort());
let Passingscore = students.filter(s => s.score >= 70);
Passingscore.forEach(s => {
  console.log(`nama: ${s.name}, nilai: ${s.score}`);
});
let top = students.find(s => s.score >= 90);
console.log(top);
let total = students.reduce((sum, s) => sum + s.score, 0);
let average = total / students.length;
console.log(`Total: ${total}`);
console.log(`Average: ${average}`);