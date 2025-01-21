import React, { useEffect, useState } from 'react'

const Exampletwo = () => {
    const [name,Setname]=useState(()=>{
        const saved=localStorage.getItem('name')
        return saved? JSON.parse(saved):''
    })

    useEffect(()=>{
        localStorage.setItem('name',JSON.stringify(name)
        )
    })

    const handle=(e)=>{
        Setname(e.target.value)
    }

    const namechange=()=> Setname("")



  return (
    <div>
        <h1>name :{name}</h1>
        <input type="text" onChange={handle} value={name} placeholder='enter your name'/>
        <button onClick={namechange}>clear name</button>

    </div>
  )
}

export default Exampletwo