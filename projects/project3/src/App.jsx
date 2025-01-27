import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meals from './Meals'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Meals/></>
  )
}

export default App
