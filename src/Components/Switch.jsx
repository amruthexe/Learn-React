import React, { useState } from 'react'

const Switch = () => {
    const [sw,setsw]= useState(false)

    
    
  return (
  <div>
    {sw ? <h1>light</h1> : <h1>dark</h1>   }


    <input type="text" />
    <button onClick={()=>{setsw((p)=>!p)}}>
        mode
    </button>

    



  </div>
  )
}

export default Switch