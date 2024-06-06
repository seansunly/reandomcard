//import { Cardjs } from "../component/Cardjs.js";

import { getData } from "../store/fatchAPi.js";
import { CardAwati } from "../component/CardAwati.js";
let random = document.querySelector("#random");


let products = await getData("products");
console.log(products)
products.map((ps)=>(random.innerHTML+=CardAwati(ps)));


