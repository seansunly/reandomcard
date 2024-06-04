
import { Card2 } from "../coponets/Card2.js";


let reamdome = document.querySelector("#reanders");

const Based_url = "http://127.0.0.1:5500/reander2/data/testss.json";
fetch(Based_url)
    .then((a)=>a.json())
    .then((datas)=>{
        let products=datas.result.products;
        products.map((product)=>(reamdome.innerHTML+=Card2(product)));
    })

