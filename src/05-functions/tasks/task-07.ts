/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: {name: string, major: string, active: boolean}[]): number {
  let count = 0;   
  for(let i = 0; i < students.length; i++){
    const student = students[i];
        if(student.active === true){
            count = count +1
        }
    }
    return count;
}

function countInactiveStudents(students: {name: string, major: string, active: boolean}[]): number{
  let count = 0;
  for(let i = 0; i < students.length; i++){
    const student = students[i];
    if(student. active === false){
      count = count +1;
    }
  }
  return count;
}

function countStudentsByMajor(students:  {name: string, major: string, active: boolean}[], major: string): number {
  let count = 0;   
 for(let i = 0; i < students.length; i++){
    const student = students[i];
    if(student. major === major){
      count = count +1;
    }
  }
  return count;
}

function printEnrollmentReport(students: {name: string, major: string, active: boolean}[]): void{
  const Active = countActiveStudents(students);
  const Inactive = countInactiveStudents(students);
  const seCount = countStudentsByMajor(students, "Software Engineering");
  const networkingCount = countStudentsByMajor(students, "Networking");
  const multimediaCount = countStudentsByMajor(students, "Multimedia");
  const total = students.length;

  console.log(`Active Student: ${Active}`);
  console.log(`Inactive Student: ${Inactive}`);
console.log(`Software Engineering: ${seCount}`);  console.log(`Networking: ${networkingCount}`);
  console.log(`Multimedia: ${multimediaCount}`);
  console.log(`Total Students: ${total}`);
}
printEnrollmentReport(students);