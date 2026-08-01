/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */
type reservation={
    Roompricepernight: number;
    NightsStayed: number; 
    ServiceCharge: number;
    Tax: number;
    isVIPMember: boolean
};
let guestay: reservation | null={
    Roompricepernight: 650000,
    NightsStayed: 4,
    ServiceCharge: 120000,
    Tax: 0.11,
    isVIPMember: true
};
let price = guestay?.Roompricepernight??0;
let nights = guestay?.NightsStayed??0;
let service = guestay?.ServiceCharge??0;
let taxprecent = guestay?.Tax??0;
let statusvip = guestay?.isVIPMember??false;

let roomSubtotal: number = price*nights;

let discountamound: number = statusvip?roomSubtotal*0.12:0;
let discountRoomprice: number = roomSubtotal-discountamound;

let taxamount: number = discountRoomprice * taxprecent;
let finalpayment: number =discountRoomprice+taxamount+service;
let isEligibleforfreebreakfast: boolean =(nights >=3)||(statusvip===true);

console.log("Hotel Reservation");
console.log(`Durasi Mengianp :${nights}malam`);
console.log(`Status Member VIP :${statusvip ? true:false}`);
console.log(`Bonus Sarapan Gratis :${isEligibleforfreebreakfast ? "Dapat":"Tidak Dapat"}`);
console.log(`Subtotal Harga Kamar :${roomSubtotal}`);
console.log(`Potongan Diskon :${discountamound}`);
console.log(`Biaya Pajak :${taxamount}`);
console.log(`Biaya Layanan :${service}`);
console.log(`Final Payment :${finalpayment}`);