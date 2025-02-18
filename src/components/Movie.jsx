import React from 'react'
import { useState } from 'react'

const Movie = () => {
    const[movie,setMovie] =  useState({
        Name:"Intresteller", 
        Rating:"8.9"
    });
    const handleClick = () => {
        const copyMovie = {
            ...movie,
            Rating: 9
     }
     setMovie(copyMovie)
    }
  return (
    <div>
        <h1>Movie Name : { movie.Name}</h1>
        <h2>Movie Rating : { movie.Rating}</h2>
        <button onClick={handleClick}>Change Rating</button>
    </div>
  )
}

export default Movie