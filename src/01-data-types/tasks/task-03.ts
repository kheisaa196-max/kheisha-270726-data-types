/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type student = {
    studentID: string;
    fullName: string;
    age: number;
    isActive: boolean;
};
const studentList: student[] =[
    {studentID: "MKL-26-041",fullName: "Kheisha khusna", age: 16, isActive: true},
    {studentID: "MKL-26-042", fullName: "Riyan Hidayat", age: 17, isActive: false},
    {studentID: "MKL-26-043", fullName: "Jesno Limit", age: 15, isActive: true}   
];
console.log("==Student Data==");
console.log(studentList);