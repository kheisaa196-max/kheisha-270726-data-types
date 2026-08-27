/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedcount= 0;
let notsubmitted= 0;
let passed= 0;
let revise= 0;
let total= 0;
let totalScore= 0;
const notsubmittedname:string[]=[];
const revisename: string[]=[];

for (let i = 0; i < submissions.length; i++) {
    const item= submissions[i];
    totalScore +=item.score;

if(item.submitted){
    submittedcount++;

if(item.score >=75){
    passed++;
}else{
    revise++;
    revisename.push(item.student);
}
}else{
    notsubmitted++;
    notsubmittedname.push(item.student);
}
}
const clasAverage= totalScore/ submissions.length;

console.log(`Submitted :${submittedcount}`);
console.log(`Not Submitted :${notsubmitted}`);
console.log(`Passed :${passed}`);
console.log(`Revise :${revise}`);
console.log(`Not Submitted Name :${notsubmittedname.join(",")}`);
console.log(`Revise Name :${revisename.join(",")}`);
console.log(`Class Average :${clasAverage.toFixed(2)}`);
