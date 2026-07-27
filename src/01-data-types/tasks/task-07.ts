/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

let registration:{
    studentId: string;
    fullName: string;
    gradeLevel: string;
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
    registrationDate: string;
    isPaymentCompleted: boolean;
}={
    studentId: "STU2026045",
    fullName: "John Doe",
    gradeLevel: "10th Grade",
    courseId: "CRS2026045",
    courseTitle: "Introduction to TypeScript",
    instructorName: "Jane Smith",
    totalLearningHours: 40,
    registrationDate: "2026-06-01",
    isPaymentCompleted: true
};
//Data registration2
let registration2:{
    studentId: string;
    fullName: string;
    gradeLevel: string;
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
    registrationDate: string;
    isPaymentCompleted: boolean;
}={
    studentId: "STU2026046",
    fullName: "Alice Johnson",
    gradeLevel: "11th Grade",
    courseId: "CRS2026046",
    courseTitle: "Advanced JavaScript",
    instructorName: "Robert Brown",
    totalLearningHours: 60,
    registrationDate: "2026-06-02",
    isPaymentCompleted: false
};
//Data registration3
let registration3:{
    studentId: string;
    fullName: string;
    gradeLevel: string;
    courseId: string;
    courseTitle: string;
    instructorName: string; 
    totalLearningHours: number;
    registrationDate: string;
    isPaymentCompleted: boolean;
}={
    studentId: "STU2026047",
    fullName: "Michael Smith",
    gradeLevel: "12th Grade",
    courseId: "CRS2026047",
    courseTitle: "Web Development Fundamentals",
    instructorName: "Emily Davis",
    totalLearningHours: 50,
    registrationDate: "2026-06-03",
    isPaymentCompleted: true
};
console.log("== Registration Information ==");
console.log({registration, registration2, registration3});