/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

import { PassThrough } from "node:stream";

let studentname: string= "Nadia Putri";
let isActive: boolean= true;
let isTutionpaid: boolean= true;
let ispassedprogammingfundamentals: boolean = true;
let ispasseddatabasesystem: boolean= true;
let  GPA: number = 3.45;
let isseatsavailable: boolean= false;
let registrationResult:string ="";

if(isActive && isTutionpaid){
if(PassThrough && ispasseddatabasesystem && GPA >= 3.20){
    if( isseatsavailable){
         registrationResult=" Registration Successful"
    }else{
        registrationResult="Added to Waiting List"
    }
}else{
    registrationResult="Academic Requirements Not Met"
}
}else{
    registrationResult="Registration Rejected"
}

console.log("Hasil pendaftaran " + studentname+":"+registrationResult);