import { Product } from "./Product";
import { products } from "../data/products";
import { Variant } from "./Variant";
import { variants } from "../data/variants";

export function Main(){
    return(
        <div className="main">
           <Product product={products[0]} />
           <Product product={products[1]} />
           <Product product={products[2]} />
           <Product product={products[2]} />
           <Product product={products[2]} />
           <Variant variant={variants[0]} />
           <Variant variant={variants[1]} />
           <Variant variant={variants[2]} />
        </div>
    )
}