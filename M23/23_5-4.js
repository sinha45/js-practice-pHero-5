//**** */ 23_5-4 (advanced) Find the matching product by searching products****//



// const products = [

//     { id: 1, name: 'iphone pro', price: 120000 },
//     { id: 2, name: 'Samsung galaxy j7 prime phone', price: 24000 },
//     { id: 3, name: 'Lenovo yoga laptop', price: 130990 },
//     { id: 4, name: 'Acer aspire laptop', price: 34000 },
//     { id: 5, name: 'Pixel 6 Phone', price: 50000 },
//     { id: 5, name: 'DCl ultra Laptop', price: 25000 }];

// function matchedProducts(product, search) {

//     const matched = [];
//     for (const product of products) {
//         if (product.name.toLowerCase().includes(search.toLowerCase())) {
//             matched.push(product);
//         }
//     }
//     return matched;
// }

// const result = matchedProducts(products, 'laptop');
// console.log(result);

// function compare(a, b) {
//     if (a == b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const result = compare(15, "15");
// console.log(result);

// function compare(a, b) {
//     if (a.toString() === b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const result = compare(25, 25);
// console.log(result);



const test = { a: 1, b: 2, c: 3 };

for (const [key, value] of Object.entries(test)) {
    console.log(key, value);
}