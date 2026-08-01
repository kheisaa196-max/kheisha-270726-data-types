/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */
type cartitem={
    product: string;
    price: number;
    quantity: number;
};
type customercheckout ={
    name: string;
    isPremium: boolean;
    voucherValue: number;
    cart: cartitem[];
};
let customerorder: customercheckout | null ={
    name: "khusna",
    isPremium: true,
    voucherValue: 100000,
    cart: [
        {product: "Mechanical Keyboard", price: 850000, quantity: 1},
        {product: "Wireless Mouse", price: 275000, quantity: 2},
        {product: "Monitor  Stand", price: 420000, quantity: 1},
    ]
};
let isPremiumuser = customerorder?.isPremium??false;
let Voucher = customerorder?.voucherValue??0;
let items = customerorder?.cart??[];

let productSubtotal = 0;
for (let item of items){
    productSubtotal +=item.price *item.quantity;
}
let memberDiscount = isPremiumuser ?0.10 :0; //Diskon 10%
let memberDiscountamound = productSubtotal *memberDiscount;

let paymentbeforetax = productSubtotal-memberDiscountamound-Voucher;

let taxtamount = paymentbeforetax *0.11;
let finalpayment = paymentbeforetax +taxtamount;

let rewaedpoints = Math.floor(paymentbeforetax / 50000);

let isfreeshippingeligible = isPremiumuser || (paymentbeforetax > 1500000);

console.log("Checkout Marketplace");
console.log(`Nama Pelanggan :${customerorder?.name?? "Guest"}`);
console.log(`Status Member Premium :${isPremiumuser ? "Ya":"Tidak"}`);
console.log(`Status Gratis Ongkir :${isfreeshippingeligible ? "Gratis":"Bayar Normal"}`);
console.log(`Poin Hadiah :${rewaedpoints}poin`);
console.log(`Subtotal Product :${productSubtotal}`);
console.log(`Diskon Member :${memberDiscountamound}`);
console.log(`Potongan Voucher :${Voucher}`);
console.log("---------------------------------------");
console.log(`Total Sebelum Pajak :${paymentbeforetax}`);
console.log(`Biaya PPN :${taxtamount}`);
console.log(`Total Akhir Bayar :${finalpayment}`);