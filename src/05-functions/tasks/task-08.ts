import { Socket } from "node:dgram";

/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

 function countSubmitted(submission: {student: string, submitted: boolean, score: number}[]):number{
     let count = 0;   
  for(let i = 0; i < submission.length; i++){
    const item = submission[i];
        if(item.submitted=== true){
            count = count +1
        }
    }
    return count;
 }

 function countMissing(submission: {student: string, submitted: boolean, score: number}[]):number{
     let count = 0;   
     for(let i = 0; i < submission.length; i++){
    const item = submission[i];
        if(item.submitted=== false){
            count = count +1
        }
    }
    return count;
 }

 function countPassed(submission: {student: string, submitted: boolean, score: number}[]):number{
     let count = 0;   
      for(let i = 0; i < submission.length; i++){
    const item = submission[i];
        if(item.score>=75){
            count = count +1
        }
    }
    return count;
 }

 function revisiStudent(submission: {student: string, submitted: boolean, score: number}[]):number{
  let count = 0;   
      for(let i = 0; i < submission.length; i++){
    const item = submission[i];
        if(item.submitted === true && item.score < 75){
            count = count +1
        }
    }
    return count;
}
function calculateAverage (submission: {student: string, submitted: boolean, score: number}[]):number{
let total = 0;
    for(let i = 0; i< submission.length; i++){
        const item = submission[i];
        total = total+ item.score;
    }
    let average = total / submission.length;
   
    return average;
    
}

function findHighestScore(submission: {student: string, submitted: boolean, score: number}[]):number{
let highest = submission[0].score;
    for(let i = 0; i < submission.length; i++){
     const item = submission[i];
    if(item.score> highest){
    highest = item.score;
    }
}
return highest;
}

function findLowestScore(submission: {student: string, submitted: boolean, score: number}[]):number{
let lowest = submission[0].score;
for(let i = 0; i < submission.length; i++){
    const item = submission[i];
    if(item.score < lowest){
        lowest = item.score;
    }
}
return lowest;
}

function printSubmissionReport(submission: {student: string, submitted: boolean, score: number}[]):void{
    const Submitted = countSubmitted(submissions);
    const Missing = countMissing(submissions);
    const Passed = countPassed(submissions);
    const Revisi =  revisiStudent(submissions);
    const Average = calculateAverage(submissions);
    const Highest =  findHighestScore(submissions);
    const Lowest = findLowestScore(submissions);
    const Total = submissions.length;

    console.log(`Submitted: ${Submitted}`);
    console.log(`Missing: ${Missing}`);
    console.log(`Passed Student: ${Passed}`);
    console.log(`Revisi Student: ${Revisi}`);
    console.log(`Averge Score: ${Average}`);
    console.log(`Highest Score: ${Highest}`);
    console.log(`Lowest Score: ${Lowest}`);
    console.log(`Total Students: ${Total}`);
}
printSubmissionReport(submissions);