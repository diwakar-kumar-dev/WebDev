```// javascript
let product = {
    name: "Iphone",
    price: 3884,
    Rating: 4.8,

    printProductName: function () {
        console.log("iaki");
    },

    printDiscount: function () {
        console.log("5% discount");
    }
};

// Access property
console.log(product.name);

// Call methods using the object
product.printProductName();
product.printDiscount();

// Check object
console.log(product);
console.log(Object.keys(product));

```
