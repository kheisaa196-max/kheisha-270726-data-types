/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];
type Student = {id: number, name: string};
type Attendance =  {studentId: number, status: string};

let presentStudents = attendance
.filter(a => a.status === "present")
.map(a =>{
    const student = students.find(s=>s.id === a.studentId)
    return student?.name;
});
    console.log(presentStudents);

let absentStudents = attendance
.filter(s => s.status === "absent")
.map(a =>{
    const student = students.find(s=>s.id === a.studentId)
    return student?.name
})
    console.log(absentStudents);

let lateStudents = attendance
.filter(s => s.status === "late")
.map(a =>{
    const student = students.find(s=>s.id === a.studentId)
    return student?.name
})
    console.log(lateStudents);
    
let attendanceStudents =  attendance.map (a=>{
    const student = students.find(s=>s.id === a.studentId)
    return{
        name: student?.name,
        status: a.status,
    };
});
console.log(attendanceStudents);