/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

const transactions : Transaction[] = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

type TRANSACTION_STATUS = "paid" | "pending" | "cancelled"
type Transaction = {
    id: string;
    customer: string;
    amount: number;
    status: TRANSACTION_STATUS;
}
type Transaction_Category = "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE" 

function extractCustomer(list: Transaction[], callback: (names: string[]) =>void){
    let names: string[] = [];

    for (let i = 0; i < list.length; i++){
        const item = list[i];
        if (item == undefined || item.customer == undefined) continue;
        names.push(item.customer);
    }
    callback(names);
}
function showResult(names: string[]){
    console.log("Customers: "+names);
}
extractCustomer(transactions, showResult);

function determineCategory(amount: number, callback: (category: Transaction_Category) => void){
    let category: Transaction_Category;

    if(amount >= 2000000){
        category = "HIGH VALUE";
    }else if(amount >= 1000000){
        category = "MEDIUM VALUE";
    }else{
        category = "LOW VALUE";
    }
    callback(category)
}
function calculateFee(
    amount: number,
    status: TRANSACTION_STATUS,
    callback: (fee: number)=>void){

    let fee = 0;
    if(status == "paid"){
        fee = amount * 0.02;
    }else if( status == "pending"){
        fee = amount * 0.01;
    }else{
        fee = 0;
    }
    callback(fee)
}
function showTransaction(id: string, category: Transaction_Category, fee: number){
    console.log("id: "+id, "category: " +category, "fee: "+fee);
}
function processTransaction(list: Transaction[], callback: (id: string, category: Transaction_Category, fee: number) =>void){
for(let i = 0; i < list.length; i++){
    let tp =  list[i];
    if ( tp == undefined) continue;
    
    let category: Transaction_Category;
    let fee = 0;

   if(tp.amount >= 2000000){
        category = "HIGH VALUE";
    }else if(tp.amount >= 1000000){
        category = "MEDIUM VALUE";
    }else{
        category = "LOW VALUE";
    }

     if(tp.status == "paid"){
        fee = tp.amount * 0.02;
    }else if(tp.status == "pending"){
        fee = tp.amount * 0.01;
    }else{
        fee = 0;
    }
        callback(tp.id, category, fee);
}
}
processTransaction(transactions, showTransaction);
