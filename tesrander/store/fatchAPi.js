const Base_url = "https://fakestoreapi.com/";

export async function getData (enpoin){
    try{
        const response = await fetch(`${Base_url}${enpoin}`);
        console.log("hello1");
        const products = await response.json();
        console.log(products);
        console.log("hello2");
        return products;
        
    }catch(error){
        console.log(error);
        console.log("hello errror")
    }

}