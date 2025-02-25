import { IProduct } from "../models"

interface ProductProps{
    product:IProduct
}


export function Product(props:ProductProps){
    return(
        <div className="product">
        <img src={props.product.image} alt={props.product.title} />
          {props.product.title}
          <p>{props.product.description}</p>
          <span>{props.product.price}</span>
        </div>
    )
}