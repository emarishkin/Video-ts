import { IVariants } from "../models2"

interface VariantProops{
    variant:IVariants
}


export function Variant(props:VariantProops){
    return(
        <div className="variant">
          <h1>{props.variant.id}</h1>
          <p>{props.variant.text}</p>
        </div>
    )
}