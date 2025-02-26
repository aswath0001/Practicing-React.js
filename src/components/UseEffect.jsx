import React, { use } from 'react';
import { useEffect,useState } from 'react';

const UseEffect = () => {
    const[value,setValue] = useState(0) ;
    const [random,setRandom] = useState(0);
    useEffect (() => {
    if (value>0){
            console.log ("call Use effect");
            document.title = `Increment ${value}`
        } 
        },[value]);
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={() => setValue(value+1)}>click</button>
        <button onClick={() => setRandom(value+1)}>click</button>
    </div>
  )
}

export default UseEffect