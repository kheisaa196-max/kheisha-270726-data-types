/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];
 
let readytoship= 0;
let unpaid= 0;
let waitingstock= 0;
const readyToShipIds :string[]=[];

for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    if (order.paid && order.stockAvailable) {
        readytoship++;
        readyToShipIds.push(order.id);
    } else if (!order.paid) {
        unpaid++;
    } else if (!order.stockAvailable) {
        waitingstock++;
    }
}
 console.log(`Ready to Ship :${readytoship}`);
 console.log(`Upaid Orders :${unpaid}`);
 console.log(`Waiting for Stock :${waitingstock}`);
 console.log(`Ready to Ship Ids :${readyToShipIds.join(",")}`);