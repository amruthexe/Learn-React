import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

const Hook2 = () => {
    //  const [posts,setPosts]=useState([])


    //  useEffect(()=>{

    // const getData =async()=>{

    //     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const res = await  data.json()
    //     setPosts(res)

    // }

    // getData()


    //  },[])


    const [po]=useFetch("https://jsonplaceholder.typicode.com/posts")



  return (
    <div>
        <h1>{
            
            <ul>

                {po.map((p)=>(
                    <li key={p.id}>
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