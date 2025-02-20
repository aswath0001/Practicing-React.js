import React, { useState } from 'react'
import UseState from './UseState'


const Counter = () => {
    const [value,setValue] = useState(() =>{
        const initialValue =0;
        return initialValue;
    });
    const changeValue =() =>{
        setValue((previousValue) => previousValue+1);
    };
  return (
    <div>
      <p>Value:{value}</p>
      <button onClick={changeValue}>click for increment</button>
    </div>
  )
}

export default Counter