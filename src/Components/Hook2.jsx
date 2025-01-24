import React, { useEffect, useState } from 'react'

const Hook2 = () => {
     const [posts,setPosts]=useState([])


     useEffect(()=>{

    const getData =async()=>{

        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const res = await  data.json()
        setPosts(res)

    }

    getData()


     },[])



  return (
    <div>
        <h1>{
            
            <ul>

                {posts.map((p)=>(
                    <li key={p.body}>
                        {p.title}
                        {p.body}
                    </li>
                ))}
            </ul>
            
            
            }</h1>




    </div>
  )
}

export default Hook2