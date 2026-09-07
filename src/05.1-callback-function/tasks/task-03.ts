/**
 * An online store has the following products:
 */
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */

interface product{
    name: string;
    price: number;
}
       
function processProducts(products: product[], tampilkan: (p: product) => string) {
    for(const produk of products){
        const result = tampilkan(produk);
        if(result !==""){
            console.log(result);
        }
    }
}
function formatDisplay(p:product): string {
    return `${p.name} - Rp${p.price}`;
}
function formatExpensive(p: product): string {
    if (p.price > 1000000) {        
        return `${p.name} - Rp${p.price}`;
    }
    return "";   
}        
 function formatDiskon(p: product): string{
    if(p.price >500000){
        const hargaDiskon =  p.price * 0.9;
        return `${p.name} - Rp${hargaDiskon}`; 
    }
    return "";
 }
 processProducts(products, formatDisplay);
 processProducts(products, formatExpensive);
 processProducts(products, formatDiskon);
