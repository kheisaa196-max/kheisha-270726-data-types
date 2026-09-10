/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

let studentScore=students.map(student =>{
let correctCount = student.answers.filter(
        (answer, index)=> answer === correctAnswers[index]
        ).length;
let processScores = correctCount * 20;
    return{
        name: student.name,
        score: processScores,
    };
})
    console.log(studentScore);

let getPass = studentScore.filter(p => p.score >70);
console.log(getPass);

let maxScore =  Math.max( ...studentScore.map(s=> s.score));
let topStudent = studentScore.find(p=> p.score === maxScore);
console.log(topStudent);

let totalScore = studentScore.reduce ((sum,s) => sum +s.score, 0);
let averageScore = totalScore / studentScore.length;
console.log(averageScore);