/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentCount= 0;
let absentCount= 0;
const absenName :string[]=[];

for (let i = 0; i < attendances.length; i++) {
  const student =attendances[i];

  if(student.present){
    presentCount++;
  }else{
    absentCount++;
    absenName.push(student.name);
  }
}
const attendancePercentage =(presentCount/attendances.length) *100;

console.log(`Present :${presentCount}`);
console.log(`Absent :${absentCount}`);
console.log(`Absent Student :${absenName.join(",")}`);
console.log(`Attedance Percentage :${attendancePercentage.toFixed(2)}%`);