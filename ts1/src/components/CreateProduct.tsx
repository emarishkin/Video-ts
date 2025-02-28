import { useState } from "react"

export function CreateProducts(){


const [value,setValue]= useState('')


const submitHandler = (event:React.FormEvent)=>{
    event.preventDefault()
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