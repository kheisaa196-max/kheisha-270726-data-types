/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

let product1:{
    productCode: string;
    productName: string;                    
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;
    averageCustomerRating: number;
    isDiscounted: boolean;
}={
    productCode: "PRD2026045",
    productName: "Wireless Earbuds",      
    sellingPrice: 1500000,  
    stockQuantity: 50,
    productWeight: 0.05,
    averageCustomerRating: 4.5,
    isDiscounted: true
};
//Data product2
let product2:{
    productCode: string;
    productName: string;        
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;
    averageCustomerRating: number;
    isDiscounted: boolean; 
}={
    productCode: "PRD2026046",
    productName: "Smart Watch",
    sellingPrice: 2500000,
    stockQuantity: 30,
    productWeight: 0.1,
    averageCustomerRating: 4.7,
    isDiscounted: false
};
//Data product3
let product3:{
    productCode: string;
    productName: string;
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;          
    averageCustomerRating: number;
    isDiscounted: boolean; 
}={
    productCode: "PRD2026047",
    productName: "Bluetooth Speaker",
    sellingPrice: 2000000,
    stockQuantity: 20,      
    productWeight: 0.3,
    averageCustomerRating: 4.6,
    isDiscounted: true
};
console.log("== Product Information ==");
console.log({product1, product2, product3});