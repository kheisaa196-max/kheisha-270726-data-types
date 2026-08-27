/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */
 let sales=[125000,350000,78000,910000,150000,420000,275000,99000,640000,18000];
 let total= 0;
 let Highest= 0;
 let Lowest= sales[0];
 let count= 0;

  for (let i=0; i<sales.length; i++){
     total=total+ sales[i];
     if(sales[i] >= Highest){
        Highest= sales[i];
     }
      if(sales[i] <= Lowest){
        Lowest=sales[i];
     }
      if(sales[i] >= 300000){
        count= count +1;
  }
}
  let average= total/sales.length;
  console.log("Total: " , total);
  console.log("Average: " , average);
  console.log("Highest: " , Highest);
  console.log("Lowest: " , Lowest);
  console.log("Count: " , count);