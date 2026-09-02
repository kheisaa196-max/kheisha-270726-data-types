    /**
     * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
     * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
     * The dashboard should display:
     * - Total sales
     * - Highest transaction
     * - Lowest transaction
     * - Average transaction
     * - Number of transactions above Rp500,000
     * 
     * Student Tasks
     * Create the following functions:
     */

    import { stripVTControlCharacters } from "node:util";

    const sales = [
      125000,
      780000,
      250000,
      99000,
      540000,
      670000,
      180000,
      450000,
      310000,
      820000
    ];

    function calculateTotalSales(sales: number[]): number {
      let total = 0;
        for(let i = 0; i < sales.length; i++){
            total = total + sales [i];
        }
        return total;
    }


    function findHighestTransaction(sales: number[]): number {
      let highest = sales[0];
    for(let i = 0; i < sales.length; i++){
        if(sales[i] > highest){
            highest = sales[i];
        }
    }
    return highest;
    }

    function findLowestTransaction(sales: number[]): number {
      let lowest = sales[0];
    for(let i = 0; i < sales.length; i++){
        if(sales[i] < lowest){
            lowest = sales[i];
        }
    }
    return lowest;
    }

    function calculateAverageSale(sales: number[]): number {
      let total = 0;
    for(let i = 0; i< sales.length; i++){
        total = total+ sales[i];
    }
    let average = total / sales.length;
    return average;
    }

    function countLargeTransactions(sales: number[], minimumAmount: number): number {
      let count = 0;
    for(let i = 0; i < sales.length; i++){
        if(sales[i] >= minimumAmount){
            count = count +1
        }
    }
    return count;
    }
    function allTransaction(sales: number[]):void{
        const highest = findHighestTransaction(sales);
        const lowest = findLowestTransaction(sales);
        const average = calculateAverageSale(sales);
        const Large  = countLargeTransactions(sales, 500000);

        console.log(`Highest Transaction: ${highest}`);
        console.log(`Lowest Transaction: ${lowest}`);
        console.log(`Average Sale: ${average}`);
        console.log(`Large Transaction: ${Large}`);
    }
allTransaction(sales);