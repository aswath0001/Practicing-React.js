import React from 'react'
function moveHandler (){
    alert ('Mouse moving')
}

const Move = () => {
  return (
  <p onMouseMove ={moveHandler}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, vero.
  </p>
  )
}

export default Move