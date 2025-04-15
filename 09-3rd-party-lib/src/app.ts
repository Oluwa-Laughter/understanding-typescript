import "reflect-metadata";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";

const products = [
  { title: "Book", price: 12.99 },
  { title: "Car", price: 12000 },
];

const newProd = new Product("", -5.99);

validate(newProd).then((errs) => {
  if (errs.length > 0) {
    console.log("VALIDATION ERRORS");
    console.log(errs);
  } else {
    console.log(newProd.getInfo());
  }
});
// const product = new Product("Book", 12.99);

// const loadedProducts = products.map(
//   (prod) => new Product(prod.title, prod.price)
// );

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) console.log(prod.getInfo());
