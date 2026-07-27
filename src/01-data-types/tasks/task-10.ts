/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. 
 * Every product added to the shopping cart stores the product code, product name, unit price, 
 * quantity purchased, and whether the product is eligible for free shipping.
 * Today, one customer added the following products to the cart.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.
 * 2. Store the product data in a single collection.
 * 3. Display the product data using console.log.
 */

type Product = {
    productCode: string;
    productName: string;
    unitPrice: number;
    quantityPurchased: number;
    isFreeShipping: boolean;
};

const productList: Product[] = [
    {productCode: "KB001", productName: "Mechanical Keyboard", unitPrice: 850000, quantityPurchased: 1, isFreeShipping: true},
    {productCode: "MS002", productName: "Wireless- Mouse", unitPrice: 275000, quantityPurchased: 2, isFreeShipping: true},
    {productCode: "HD003", productName: "SSD Eksternal 1TB", unitPrice: 1650000, quantityPurchased: 1, isFreeShipping: false},
    {productCode: "HP004", productName: "Gaming Headset", unitPrice: 720000, quantityPurchased: 1, isFreeShipping: true}
];

console.log("== SHOPPING ==");
console.table(productList);