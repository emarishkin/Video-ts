import { useState } from 'react'
import './App.css'

function App() {
  const[count,setCount]=useState(0)
  return (
    <div className='container'>
      <h1 className={''} >Кнопка</h1>
      <button onClick={()=>setCount(()=>count+1)}>+</button>
      <p>{count}</p>
      <button onClick={()=>setCount(()=>count-1)}>-</button>
    </div>
  )
}

export default App
