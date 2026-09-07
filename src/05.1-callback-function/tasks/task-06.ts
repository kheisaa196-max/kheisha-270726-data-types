/**
 * A company has employee salary data below.
 * The HR department wants to process the same employee data using different rules.
 * For example:
 * - Calculate final salary.
 * - Determine bonus eligibility.
 * - Generate employee performance status.
 * 
 * Bonus rules:
 * - Performance ≥ 90 → 15% of salary and status is "Exceeds Expectations"
 * - Performance ≥ 80 → 10% of salary and status is "Meets Expectations"
 * - Performance ≥ 70 → 5% of salary and status is "Needs Improvement"
 * - Below 70 → no bonus and status is "Unsatisfactory"
 * 
 * TASK:
 * Create a reusable function that accepts:
 * - employee array
 * - callback function
 * 
 * The callback should determine what operation is performed on each employee.
 * Students should create at least three callbacks below.
 * The processing function should not contain the HR business rules.
 */
type Employee = {
    name: string
    salary: number
    performance: number
}
type PERFORMANCE_STATUS = "Exceeds Expectations" | "Meets Expectations" | "Needs Improvement" | "Unsatisfactory"
type EMPLOYEE_BONUS = Employee & { bonus: number }
type EMPLOYEE_PERFORMANCE = Employee & { status: PERFORMANCE_STATUS }

const employees: Employee[] = [
    { name: "Alya", salary: 5000000, performance: 92 },
    { name: "Budi", salary: 6500000, performance: 78 },
    { name: "Citra", salary: 7200000, performance: 88 },
    { name: "Dimas", salary: 4500000, performance: 95 },
    { name: "Eka", salary: 8000000, performance: 69 }
];


function calculateFinalSalary(selectedEmployee: Employee): EMPLOYEE_BONUS {
    // implementation: this function return employee data with bonus and updated final salary
    if(selectedEmployee.performance >= 90) {
        const bonus = selectedEmployee.salary * 0.15;
        return { ...selectedEmployee, bonus: bonus};
    }else if (selectedEmployee.performance >= 80) {
        const bonus = selectedEmployee.salary * 0.10;
        return { ...selectedEmployee, bonus: bonus};
    } else if( selectedEmployee.performance >=70) {
        const bonus = selectedEmployee.salary * 0.05;
        return { ...selectedEmployee, bonus: bonus};
    }else{
        return { ...selectedEmployee, bonus: 0};
    }
}
function getPerformanceStatus(selectedEmployee: Employee): EMPLOYEE_PERFORMANCE {
   if(selectedEmployee.performance >= 90){
    return { ...selectedEmployee, status: "Exceeds Expectations"};
   }else if(selectedEmployee.performance >= 80 ){
    return { ...selectedEmployee, status:  "Meets Expectations"};
   }else if(selectedEmployee.performance >=70){
    return { ...selectedEmployee, status: "Needs Improvement"};
   }else{
    return { ...selectedEmployee, status: "Unsatisfactory"};
   }
}

function employeeProcess<T>(
    arr: Employee[],
    callback: (employee: Employee) => T
): T[] {
    const hasil: T[]=[];
    for(const employee of arr){
        const result = callback(employee);
        hasil.push(result);        
    }
    return hasil;
}


const employeeWithFinalSalary = employeeProcess(employees, calculateFinalSalary)
const employeeWithPerformanceStatus = employeeProcess(employees, getPerformanceStatus)

console.log(`====== EMPLOYEES WITH FINAL SALARY + BONUS ======`);
console.log({ employees: employeeWithFinalSalary })
console.log(`====== EMPLOYEES WITH PERFORMANCE STATUS ======`);
console.log({ employees: employeeWithPerformanceStatus })

