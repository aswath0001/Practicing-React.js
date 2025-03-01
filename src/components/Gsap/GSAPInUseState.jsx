import React, { useState } from 'react'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './App.css'

const GSAPInUseState = () => {
    const boxRef = useRef(null)
    const [value,setValue] = useState (0);
    useGSAP (() =>{
        gsap.to (boxRef.current,{
            x:200+value,
            duration:600,
        })
    },
{dependencies:[value]}
);
  return (
    <div className='app'>
        <h1>{value}</h1>
        <div className='box' ref ={boxRef}></div>
        <button onClick={() => setValue(value+100)}>increment</button>
        <button onClick={() => setValue(value-100)}>decrement</button>
    </div>
  )
}

export default GSAPInUseState