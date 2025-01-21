import React, { useState } from 'react'

const TodoList = () => {
    const [todos,Settodos]=useState([])
    const [task,Settask]=useState('')
    const handle=(e)=>{
        Settask(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        Settodos([...todos,task])
        Settask("")
    }




  return (
    <div>
        <h1>welcome to todo Application</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} placeholder='Enter Your task' onChange={handle}/>
            <button type="submit">Add the todo</button>
        </form>
        {todos.map((t,i)=>(
            <ul key={i}>
                <li>{t}</li>
            </ul>

        ))}
    </div>
  )
}

export default TodoList