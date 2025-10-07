import { useState } from 'react';
import './App.css'

function App() { 
  const[count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
