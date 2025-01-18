import React from 'react'

const JSXRules = () => {
  return (
    <div>
        <h1>JSXRules</h1>
        <p>Jsx must have single parent tag</p>
        <p>Jsx mush be proply closed</p>
        <p style={{color:"red"}}>instead of <code>class</code> we have to use <code>className</code> camelcase</p>
    </div>
  )
}

export default JSXRules