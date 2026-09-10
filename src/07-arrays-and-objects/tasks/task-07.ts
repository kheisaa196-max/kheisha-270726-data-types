/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

let completeOrder = orders.filter(i=>i.status === "completed");
console.log(completeOrder);

let totalValue = orders.map(order =>{
let total = order.items.reduce((sum, items) => sum + items.price*items.quantity, 0);
return{
    id: order.id,
    customer: order.customer,
    status: order.status,
    total: total 
}
});
console.log(totalValue);

let maxTotal = Math.max( ...totalValue.map(o => o.total));
let topCustomer = totalValue.find( o=> o.total === maxTotal);
console.log(topCustomer);

let totalRevenue = totalValue
.filter( o => o.status === "completed")
.reduce((sum,o) =>sum +o.total,0);
console.log(totalRevenue);

let allProduct = orders.flatMap(o=>o.items). map(o=> o.product);
console.log(allProduct);