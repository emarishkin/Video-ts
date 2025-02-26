import { IProduct } from "../models"
import { useState } from "react"


interface ProductProps{
    product:IProduct
}


export function Product(props:ProductProps){

 const [prrice,setPrrice] = useState(false)

    return(
        <div className="product">
        <img src={props.product.image} alt={props.product.title} />
          {props.product.title}
          <p>{props.product.description}</p>
        
          <button onClick={()=>setPrrice(true)}>
            Click
          </button>
          
          {prrice && <span style={{fontSize:'22px',fontWeight:'700'}}>{props.product.price}</span>}
  
          <button onClick={()=>setPrrice(false)}>
            close
          </button>

        </div>
    )
}