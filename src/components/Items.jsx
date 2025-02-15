import React from 'react'

const items =["Apple","Orange","Banana"]
const Cart =() =>{
  return <div><h1>Cart🛒</h1>
   {items.length>0 && <h2>you have {items.length} Items in your cart</h2>}
   <ul>
    <h3>Products</h3>
    {items.map(item =>(
        <li key={Math.random()}>{item}</li>
    ))}
   </ul>
  </div>
}

const Items = () => {
  return (
    <div>
        <Cart/>

    </div>
  )
}

export default Items