/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */
let ispoweredon: boolean = true;
let temperature: number = 95;
let ishightvibration: boolean = false;
let productionspeed: number = 92;
let status:string ="";

if(!ispoweredon){
    status = " Machine Offline";
}else{
    if(temperature>90){
        if(ishightvibration){
            status="Emergency Shutdown";
        }else{
            status="Cooling Required";     
     }
    }else{
        if(productionspeed<=80){
            status="Performance Warning";
        }else{
            status="Machine Operating Normally";    
        }
    }
}
console.log(status);