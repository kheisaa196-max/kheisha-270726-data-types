import { truncate } from "node:fs";

/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */
type datastudent={
    name : string;
    ipk : number;
    penghasilanorangtua : number;
    jumlahkompetisi: number;
    catatanpelanggaran: boolean;
    kelengkapandokumen: boolean;
};
let candidate: datastudent | null ={
    name : "Alya Putri",
    ipk : 3.89,
    penghasilanorangtua : 4200000,
    jumlahkompetisi :4,
    catatanpelanggaran : false,
    kelengkapandokumen : true
};
const TOTAL_BUDGET :number = 500000000;
let ipk = candidate?.ipk?? 0;
let penghasilanorangtua = candidate?. penghasilanorangtua?? 99999999;
let jumlahkompetisi = candidate?.jumlahkompetisi?? 0;
let catatanpelanggaran = candidate?.catatanpelanggaran?? true;
let kelengkapandokumen = candidate?.kelengkapandokumen?? false;

let isAccepted: boolean=
ipk >= 3.75 &&
penghasilanorangtua < 5000000 &&
jumlahkompetisi >=3 &&
catatanpelanggaran == false &&
kelengkapandokumen == true ;
let scholarshipamount:number=isAccepted? 12000000:0;
let remainingbudget:number = TOTAL_BUDGET-scholarshipamount;
console.log(" SELEKSI BEASISWA");
console.log(`Nama Mahasiswa :${candidate?.name??"unknown"}`);
console.log(`Status Seleksi :${isAccepted? "diterima" : "ditolak"}`);
console.log(`Dana Beasiswa :${scholarshipamount}`);
console.log(`Sisa Dana Anggaran :${remainingbudget}`);