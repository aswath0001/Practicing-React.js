import React from 'react';
import { useState } from 'react';

const Us = () => {
    let x = 1;
    const increment = () => {
        x = x+1;
        console.log("x",x)
    };
  return (
    <div>
        <h1>
        {x}
        </h1>
        <button onClick={increment}>Click </button>
    </div>
   
  )
};

export default Us;