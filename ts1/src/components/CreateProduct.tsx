export function CreateProducts(){

const submitHandler = (event:React.FormEvent)=>{
    event.preventDefault()
}


    return(
        <form onSubmit={submitHandler}>
            <input 
            type="text" 
            className="input"
            placeholder="_______________"
            />
            <button className="button" type="submit">click</button>
        </form>
    )
}