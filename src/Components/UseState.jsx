import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0)
    const handle=()=>(setCount(count+1))
  return (
    <div>
        {count}
<br />
        <button onClick={handle}>Click Me </button>
    </div>
  )
}

export default State