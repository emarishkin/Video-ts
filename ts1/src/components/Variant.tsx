import { IVariants } from "../models2"
import { useState } from "react"

interface VariantProops{
    variant:IVariants
}


export function Variant(props:VariantProops){

    const [ditails,setditails] = useState(false)


    return(
        <div className="variant">
          <h1>{props.variant.id}</h1>
          <p>{props.variant.text}</p>

          <button onClick={()=>setditails(prev=>!prev)}>
            {ditails ? 'close diteils' : 'open diteils'}
          </button>

          {ditails && <p>{props.variant.price}</p>}
        </div>
    )
}