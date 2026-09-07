/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];
type Student = {
    name: string;
    score: number;
    attendance: number;
}
type RECOMMENDATION = "Excellent" | "Good" | "Improve Attendance" | "Improve Academic Performance"
type PASS_STATUS = "PASS" | "FAIL"
type ATTENDANCE_STATUS = "MEETS REQUIREMENT" | "BELOW REQUIREMENT"
type PERFORMANCE_CATEGORY = "GOOD" | "POOR"

type StudentWithPassStatus = Student & { passStatus: PASS_STATUS };
type StudentWithPerformanceCategory = Student & { performanceCategory: PERFORMANCE_CATEGORY };
type StudentWithAttendanceStatus = Student & { attendanceStatus: ATTENDANCE_STATUS };
type StudentWithRecommendation = Student & { recommendation: RECOMMENDATION };

function processStudents <T>(
    arr : Student[],
    callback: (student: Student) => T
): T []{
const hasil: T[]=[];
    for(const student of arr){
        const result = callback(student);
        hasil.push(result);        
    }
    return hasil;
}
function getPassStatus(selectStudent: Student): StudentWithPassStatus{
    if(selectStudent.score >= 75 && selectStudent.attendance >=90) {
        return { ...selectStudent,  passStatus: "PASS"};
    }
        return { ...selectStudent, passStatus: "FAIL"};
}
function getPerformanceCategory(selectStudent: Student): StudentWithPerformanceCategory{
    if(selectStudent.score >= 75){
        return { ...selectStudent, performanceCategory: "GOOD"};
    }
        return { ...selectStudent, performanceCategory: "POOR"};
}
function getAttendanceStatus(selectStudent: Student): StudentWithAttendanceStatus{
    if(selectStudent.attendance >=90){
        return{ ...selectStudent, attendanceStatus: "MEETS REQUIREMENT"};
    }
        return{ ...selectStudent, attendanceStatus: "BELOW REQUIREMENT"};
}
function getRecommendation(selectStudent: Student): StudentWithRecommendation{
    if(selectStudent.score >= 90 && selectStudent.attendance >= 90){
        return{ ...selectStudent, recommendation: "Excellent"};
    }else if(selectStudent.score >= 75 && selectStudent.attendance >=90){
        return{ ...selectStudent, recommendation: "Good"};
    }else if(selectStudent.score >= 75 && selectStudent.attendance < 90){
        return{ ...selectStudent, recommendation: "Improve Attendance"};
    }else{
        return{ ...selectStudent, recommendation: "Improve Academic Performance"};
    }
}

const studentWithPassStatus = processStudents(students, getPassStatus );
const studentWithPerformanceCategory = processStudents(students, getPerformanceCategory);
const studentWithAttendanceStatus = processStudents(students,getAttendanceStatus);
const studentWithRecommendation = processStudents(students, getRecommendation);

console.log(`====== STUDENTS WITH PASS STATUS ======`);
console.log({ students: studentWithPassStatus });
console.log(`====== STUDENTS WITH PERFORMANCE CATEGORY ======`);
console.log({ students: studentWithPerformanceCategory });
console.log(`====== STUDENTS WITH ATTENDANCE STATUS ======`);
console.log({ students: studentWithAttendanceStatus });
console.log(`====== STUDENTS WITH RECOMMENDATION ======`);
console.log({ students: studentWithRecommendation });