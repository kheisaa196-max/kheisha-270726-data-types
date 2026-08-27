/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let countA= 0;
let countB= 0;
let countC= 0;
let countD= 0;
let totalscore= 0;
let Highest= students[0].score;
let Lowest= students[0].score;

for (let i = 0; i < students.length; i++) {
    const score= students[i].score;
    totalscore += score;

if(score >Highest){
    Highest = score;
}if(score < Lowest){
    Lowest = score;
}
if(score >= 90){
    countA++;
}else if(score >=80){
    countB++;
}else if(score >=70){
    countC++;
}else {
    countD++;
}
}
const Averagescore = totalscore/students.length;

console.log(`A :${countA}`);
console.log(`B :${countB}`);
console.log(`C :${countC}`);
console.log(`D :${countD}`);
console.log(`Highest Score :${Highest}`);
console.log(`Lowest Score :${Lowest}`);
console.log(`Average Score :${Averagescore.toFixed(2)}`);