import { Cardjs } from "../component/Cardjs.js";
let random = document.querySelector("#random");
const url = "http://127.0.0.1:5500/tesrander/data/product.json";

fetch(url).then((product)=>product.json())
            .then((data)=>{
                let products=data;
                products.map((p)=>(random.innerHTML+=Cardjs(p)));
            })