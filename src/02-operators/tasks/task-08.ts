/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */
type datasmarthome={
    previousmeter: number;
    currentmeter: number;
    pricePerKwh: number;
    isSolarinstalled: boolean;
    isEnergysavingenabled: boolean;
};
let SmartHome: datasmarthome | null={
    previousmeter: 225640,
    currentmeter: 25892,
    pricePerKwh: 1650,
    isSolarinstalled: true,
    isEnergysavingenabled: false
};
let prev = SmartHome?.previousmeter??0;
let current = SmartHome?.currentmeter??0;
let pricekwh = SmartHome?.pricePerKwh??0;
let solar = SmartHome?.isSolarinstalled??false;
let energy= SmartHome?.isEnergysavingenabled??false; 

let totalconsumtion: number = current - prev;
let initialBill: number = totalconsumtion*pricekwh;

let solarDiscount: number = solar? 0.20:0; //diskon 20%
let energyDiscount: number = energy? 0.05:0;
let totalDiscount: number = solarDiscount +energyDiscount;

let discountamound: number = initialBill*totalDiscount;
let finalpayment: number = initialBill-discountamound;

let isGreenEnergyQualified: boolean = solar && (totalconsumtion<300) && energy;

console.log("Energi Rumah Pintar");
console.log(`Total Konsumsi Energi :${totalconsumtion}Kwh`);
console.log(`Status Panel Surya :${solar ? "Terpasang":"Tidak Terpasang"}`);
console.log(`Mode Hemat Energi :${energy ? "Aktif": "Mati"}`);
console.log(`Progom Energi Hijau :${isGreenEnergyQualified ?"Lolos":"Tidak Lolos"}`);
console.log(`--------------------`);
console.log(`Tagiahan Listrik Awal :${initialBill}`);
console.log(`Total Potongan Diskon :${discountamound}`);
console.log(`Total Tagihan Akhir :${finalpayment}`);
