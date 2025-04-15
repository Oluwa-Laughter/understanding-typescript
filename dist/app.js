"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const product_model_1 = require("./product.model");
const products = [
    { title: "Book", price: 12.99 },
    { title: "Car", price: 12000 },
];
const newProd = new product_model_1.Product("", -5.99);
(0, class_validator_1.validate)(newProd).then((errs) => {
    if (errs.length > 0) {
        console.log("VALIDATION ERRORS");
        console.log(errs);
    }
    else {
        console.log(newProd.getInfo());
    }
});
const loadedProducts = (0, class_transformer_1.plainToClass)(product_model_1.Product, products);
for (const prod of loadedProducts)
    console.log(prod.getInfo());
//# sourceMappingURL=app.js.map