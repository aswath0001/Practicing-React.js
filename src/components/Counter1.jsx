import React, { useState } from 'react'

const Counter1 = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>you clicked {count} times</h1>
        <button onClick={() => setCount(count +1)}>Click for increment</button>
        <button onClick={() => setCount(count -1)}>Click for decrement</button>
    </div>
  )
};

export default Counter1;