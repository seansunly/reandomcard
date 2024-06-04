
import { CardComponent } from "../coponets/CardCoponets.js";
//import { product } from "../data/product.js";

let reamdome = document.querySelector("#renderArea");
//product.map((product) => (reamdome.innerHTML += CardComponent(product)));
const Based_url = "http://127.0.0.1:5500/Render-product/data/product.json";
fetch(Based_url)
    .then((res)=>res.json())
    .then((datas)=>{
        let products=datas;
        products.map((products2)=>(reamdome.innerHTML+=CardComponent(products2)));
    })

    