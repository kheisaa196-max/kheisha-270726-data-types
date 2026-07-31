/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

type Employee = {
  name: string;
  basicSalary: number;
  overtimeHours?: number;
  overtimeRate?: number;
};

let employee: Employee | null = {
  name: "Dimas",
  basicSalary: 5000000,
  overtimeHours: 12,
  overtimeRate: 50000,
};

let hours = employee?.overtimeHours ?? 0;
let rate = employee?.overtimeRate ?? 0;

let upahLembur = hours * rate;
let bonus = hours > 10 ? 300000 : 0;
let gajiAkhir = (employee?.basicSalary ?? 0) + upahLembur + bonus;

console.log(`Nama Karyawan: ${employee?.name ?? "Unknown"}`);
console.log(`Upah Lembur  : Rp${upahLembur}`);
console.log(`Bonus        : Rp${bonus}`);
console.log(`Gaji Akhir   : Rp${gajiAkhir}`);