import { useState } from "react"
import { IProduct } from "../models"
import axios from "axios"


const productData:IProduct = {
    id:5,
    title:'',
    image:'',
    price:11,
    description:'r'
  }

  interface createProductProops{
    onCreate:()=>void
  }

export function CreateProducts({onCreate}:createProductProops){

const [value,setValue]= useState('')


const submitHandler = async (event:React.FormEvent)=>{
    event.preventDefault()

productData.title= value

  await axios.post<IProduct>('https://fakestoreapi.in/api/products',productData)

  onCreate()
}

// const changeHandle = (event:React.KeyboardEvent<HTMLInputElement>) => {
//   setValue(event.target.value)
// }


    return(
        <form onSubmit={submitHandler}>
            <input 
            type="text" 
            className="input"
            placeholder="_______________"
            value={value}
            onChange={(event)=>setValue(event.target.value)}
            />
            <button className="button" type="submit">click</button>
        </form>
    )
}