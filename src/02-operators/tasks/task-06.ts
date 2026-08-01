/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
type Internetbilling ={
    hourlyrate: number;
    hoursplayed: number;
    minutesplayed: number
};
let internetusage: Internetbilling | null={
    hourlyrate: 8000,
    hoursplayed: 7,
    minutesplayed: 35
};
let rate= internetusage?.hourlyrate?? 0;
let basehours= internetusage?.hoursplayed??0;
let baseminutes= internetusage?.minutesplayed??0;
let totalminutes: number =(basehours*60)+baseminutes;
let remainingminutes: number =totalminutes%60;

let billedhours: number =remainingminutes >0? basehours +1:basehours;
let subtotal: number = billedhours*rate;
let isDiscountEligible: boolean = billedhours >5;
let discountamound: number = isDiscountEligible? subtotal *0.15:0;

let finalpayment: number = subtotal-discountamound;

console.log("Internet Cafe");
console.log(`Total playing time in minutes :${totalminutes}menit(${basehours} jam ${remainingminutes} menit)`);
console.log(`Remaining minutes :${remainingminutes}menit`);
console.log(`Total billed hours :${billedhours}jam`);
console.log(`Total payment :${subtotal}`);
console.log(`Discount amount :${discountamound}`);
console.log(`Final Payment :${finalpayment}`);