import React from 'react'
import { useState } from 'react'

const Film = () => {
    const[film,setFilm] = useState({
        Name:'John Wick 4',
        Actor:'Keanu Reves'
    });
    const click = () => setFilm ({...film, Actor:'Reves' });
    

  return (
    <div>
       <h1>Name:{film.Name}</h1>
       <h2>Actor:{film.Actor}</h2>
       <button onClick={click}>Click me</button>
    </div>
  )
}

export default Film