/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

let name:string = "Andi Wijaya";
let monthly:number = 10000000;
let creditscore:number = 725;
let existing:number =2500000;
let ispermanent: boolean = true;

let pastskrining:boolean = monthly <= 8000000 && creditscore >= 700;
let rasio: number = existing/monthly;
let skrining2: boolean = rasio <= 0.30 && ispermanent;

if (pastskrining && skrining2){
    console.log(`pemohon: ${name}`);
    console.log("Keputusan : Loan Approved");
}else if(pastskrining){
    console.log(`pemohon: ${name}`);
    console.log("Keputusan: Manual review");
}else{
    console.log(`pemohon: ${name}`);
    console.log("Keputusan: Loan Rejected");
}