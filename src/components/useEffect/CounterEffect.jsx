import React, { useEffect, useState } from 'react'


const CounterEffect = () => {
    const [count , setCount] = useState (1)

    useEffect (() => {
        document.title = `count: ${count}`
    },[count])
  return (
    <div>
      <h1>
        count:{count}
      </h1>
      <button onClick={() => setCount(count+1)}>Increment on click</button>
    </div>
  )
};

export default CounterEffect;