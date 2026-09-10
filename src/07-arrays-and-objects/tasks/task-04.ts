/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];
let subtotal = cart.reduce((sum, p) => sum + p.quantity* p.price, 0);
console.log(`Total: ${subtotal}`);

let discountPercentage = 0
if( subtotal >= 3000000){
    discountPercentage=0.10;
}else if( subtotal >= 2000000){
    discountPercentage=0.05;
}
console.log(`Diskon: ${discountPercentage *100}%`);

let finaltotal = subtotal -(subtotal *discountPercentage)
console.log(finaltotal);

let expensive = cart.find(p => p.price >= 1000000)
console.log(expensive);