import React from 'react'
import { useState } from 'react'

const Example = () => {
  const[price,setPrice] = useState(() =>{
     const initialPrice =100;
     return initialPrice;
  });
  const increaseInPrice =() =>{
    setPrice((previousPrice) => previousPrice+25);
  }
  return (
    <div>
      <h1>Price:{price}</h1>
      <button onClick={increaseInPrice}>Click me</button>
    </div>
  )
}

export default Example;