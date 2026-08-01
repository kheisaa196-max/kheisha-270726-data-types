/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */


let friedrice = 3;
let pricefreidrice = 18000;

let drink = 2
let pricedrink= 5000;

let isStudent : boolean;
isStudent = true;

let discount= 10000;

let totalfriedrice = friedrice *pricefreidrice;
let totaldrink = drink *  pricedrink;
let grantotal=totalfriedrice + totaldrink;
let finalpayment=grantotal - discount;

console.log("=== calculation===")
console.log(`Apakah dia siswa :${isStudent ? true : false}`);
console.log ("Total fried rice : Rp"+totalfriedrice);
console.log("Total drink : Rp"+totaldrink);
console.log("Grandtotal :Rp"+grantotal);

console.log("finalpayment :Rp"+finalpayment);