import { Product } from "./Product";
import { products } from "../data/products";
import { Variant } from "./Variant";
import { variants } from "../data/variants";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../models";
import { ModalWindow } from "./ModalWindow";




export function Main(){

// const [products,setProducts] = useState<IProduct[]>([])

// async function fetchProducts() {
//    const response = await axios.get<IProduct[]>('https://fakestoreapi.in/api/products?limit=5')
//    setProducts(response.data)
// }


// useEffect(()=>{
//     fetchProducts()
// },[])


    return(
        <div className="main">
           {products.map(product=><Product product={product} key={product.id} />)}
           {variants.map(variant=><Variant variant={variant} key={variant.id}/>)}
           <div>
            <ModalWindow/>
           </div>
           {/* <Product product={products[0]} />
           <Product product={products[1]} />
           <Product product={products[2]} />
           <Product product={products[2]} />
           <Product product={products[2]} />
           <Variant variant={variants[0]} />
           <Variant variant={variants[1]} />
           <Variant variant={variants[2]} /> */}
        </div>
    )
}