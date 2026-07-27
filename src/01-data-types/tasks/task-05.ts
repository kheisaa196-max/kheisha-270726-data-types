/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

let attendance:{
    employeeID: string;
    employeeName: string;       
    date: string;
    checkInTime: string;
    checkOutTime: string;   
    totalWorkingHours: number;
    isPresent: boolean;
}={
    employeeID: "MKL2026044",
    employeeName: "Nadia Putri",
    date: "2026-01-02",     
    checkInTime: "08:00",
    checkOutTime: "17:00",
    totalWorkingHours: 9,
    isPresent: true
};
//Data Attendance2;
let attendance2:{
    employeeID: string;
    employeeName: string;       
    date: string;
    checkInTime: string;
    checkOutTime: string;   
    totalWorkingHours: number;
    isPresent: boolean;
}={
    employeeID: "MKL2026045",   
    employeeName: "Rizky Pratama",
    date: "2026-01-02",     
    checkInTime: "08:30",
    checkOutTime: "17:30",
    totalWorkingHours: 9,
    isPresent: true
};
//Data Attendance3;
let attendance3:{
    employeeID: string;
    employeeName: string;       
    date: string;
    checkInTime: string;
    checkOutTime: string;   
    totalWorkingHours: number;
    isPresent: boolean;
}={
    employeeID: "MKL2026046",   
    employeeName: "Hana Safitri",
    date: "2026-01-02",     
    checkInTime: "08:15",
    checkOutTime: "17:15",
    totalWorkingHours: 9,
    isPresent: true
};
console.log("== Attendance Data==");
console.log({attendance, attendance2, attendance3});