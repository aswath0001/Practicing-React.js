import React from 'react'

const Productlist = () => {
    const products = [
        {id:1,name:'phone',price:'$600'},
        {id:2,name:'laptop',price:'$1600'},
        {id:3,name:'Headphone',price:'$199'}
    ]
  return (
    <div>
        {products.map(product =>(
            <div key = {product.id}>
                <h1>Name:{product.name}</h1>
                <h1>Price:{product.price}</h1>
            </div>
        ))}
    </div>
  )
}

export default Productlist