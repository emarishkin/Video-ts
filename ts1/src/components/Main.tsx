import { Product } from "./Product";
import { products } from "../data/products";

export function Main(){
    return(
        <div className="main">
           <Product product={products[0]} />
           <Product product={products[1]} />
           <Product product={products[2]} />
           <Product product={products[2]} />
           <Product product={products[2]} />
        </div>
    )
}