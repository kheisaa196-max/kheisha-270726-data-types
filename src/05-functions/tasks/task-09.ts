/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];
 
function countAdmitted(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
  let count = 0;   
  for(let i = 0; i < patients.length; i++){
    const item = patients[i];
        if(item.admitted=== true){
            count = count +1
        }
    }
    return count;
}
function countDischarged(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
  let count = 0;   
  for(let i = 0; i < patients.length; i++){
    const item = patients[i];
        if(item.admitted=== false){
            count = count +1
        }
    }
    return count;
}
function countByDepartement(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[], department: string): number {
  let count = 0;   
  for(let i = 0; i < patients.length; i++){
    const item = patients[i];
    if(item.department === department){
      count = count + 1;
    }
  }
  return count;
}
function findHighestBill(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
  let highest = patients[0].bill;
    for(let i = 0; i < patients.length; i++){
     const item = patients[i];
    if(item.bill> highest){
    highest = item.bill;
    }
}
return highest;
} 
function findLowestBill(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
  let lowest = patients[0].bill;
    for(let i = 0; i < patients.length; i++){
     const item = patients[i];
    if(item.bill< lowest){
    lowest = item.bill;
    }
}
return lowest;
}
function calculateAverageBill(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
  let total = 0;
  for (let i = 0; i < patients.length; i++) {
    const item = patients[i];
    total = total + item.bill;
  }
  return total / patients.length;
}

function calculateTotalRevenue(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
  let total = 0;
  for (let i = 0; i < patients.length; i++) {
    const item = patients[i];
    total = total + item.bill;
  }
  return total;
}

function getAdmittedNames(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): string[] {
  let names: string[] = [];
  for (let i = 0; i < patients.length; i++) {
    const item = patients[i];
    if (item.admitted === true) {
      names.push(item.name);
    }
  }
  return names;
}

function printHospitalReport(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): void {
  const total = patients.length;
  const admitted = countAdmitted(patients);
  const discharged = countDischarged(patients);
  const pediatrics = countByDepartement(patients, "Pediatrics");
  const cardiology = countByDepartement(patients, "Cardiology");
  const orthopedics = countByDepartement(patients, "Orthopedics");
  const highest = findHighestBill(patients);
  const lowest = findLowestBill(patients);
  const average = calculateAverageBill(patients);
  const revenue = calculateTotalRevenue(patients);
  const admittedNames = getAdmittedNames(patients);

  console.log(`Total Patients: ${total}`);
  console.log(`Admitted Patients: ${admitted}`);
  console.log(`Discharged Patients: ${discharged}`);
  console.log(`Pediatrics: ${pediatrics}`);
  console.log(`Cardiology: ${cardiology}`);
  console.log(`Orthopedics: ${orthopedics}`);
  console.log(`Highest Bill: ${highest}`);
  console.log(`Lowest Bill: ${lowest}`);
  console.log(`Average Bill: ${average}`);
  console.log(`Total Revenue: ${revenue}`);
  console.log(`Admitted Patients Names: ${admittedNames}`);
}

printHospitalReport(patients);

