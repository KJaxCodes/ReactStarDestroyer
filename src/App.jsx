import { useState } from 'react'
import './App.css'
import Star from './Star'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Star />
    </>
  )
}

export default App
