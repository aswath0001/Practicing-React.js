import React from 'react'

const Greeting = () => {
    const greeting = 'Hello'
    const name = 'Aswath'
    const date = new Date
    

  return (
    <div>
        <h1>{greeting}</h1>
        <p>Date:{date.getDate()}</p>
        <h4>Name:{name}</h4>
        
    </div>
  )
}

export default Greeting