import React from 'react'
import { useState } from 'react'



const Click = () => {

    const [count,setCount] = useState(0);
    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Click me</button>
      <button onClick={decrement}>Click me</button>
      
    </div>
  )
}

export default Click