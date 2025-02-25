import React from 'react';
import { useState } from 'react';
     {/*  use state is bascially a hook 
          A hook is simply a javascript function
          Each hook starts with a "use"
          Use state hook simply returns an array which contains variable and function
    */}
const Us = () => {
    const [id, setId] = useState (1);


    

    const increment = () => {
       /* x = x+1;
        console.log("x",x)*/
        setId (id+1);
    };
  return (
    <div>
        <h1>
        {id}
        </h1>
        <button onClick={increment}>Click </button>
    </div>
   
  )
};

export default Us;