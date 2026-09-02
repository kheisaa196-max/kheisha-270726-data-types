/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport( attendances:{name: string, present: boolean}[]): void{
    let present =0;
    let absent =0;
    let Namesabsentstudents : string[] =[];

    for(let i = 0; i < attendances.length; i++){
        const student = attendances[i];
        if(student.present === true){
            present = present + 1;
    }else{
        absent = absent + 1;
       Namesabsentstudents.push(student.name);
    }
    }
console.log(`Total Present: ${present}`);
console.log(`Total Absent: ${absent}`);
console.log(`Names of absent students: ${Namesabsentstudents}`);
}

printAttendanceReport(attendances);