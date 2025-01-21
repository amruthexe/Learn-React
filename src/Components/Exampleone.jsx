import React, { useState } from 'react'

const Exampleone = () => {
 const [ count,setCount]=useState(()=>{
    const ins=10;
    return ins
 })

 const increment=()=>{
    setCount((p)=>p+1)
 }


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>(setCount((pre)=>pre+1))}>click increment</button>
    </div>
  )
}

export default Exampleone