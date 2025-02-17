import React from 'react'

const copyHandler =() =>{
    console .log( "Hey! dont copy😁")
}

const Copy = () => {
  return (
    <div onCopy={copyHandler}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, amet.</p>
    </div>
  )
}

export default Copy