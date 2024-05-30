
import { CardComponent } from "../coponets/CardCoponets.js";
import { product } from "../data/product.js";

let reamdome = document.querySelector("#renderArea");
product.map((product) => (reamdome.innerHTML += CardComponent(product)));