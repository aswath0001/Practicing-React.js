import { useRef } from "react";
import React from 'react'

const UseRef1 = () => {
    const inputValue = useRef(null);

    const focusInput = () => {
        inputValue.current.focus();
        inputValue.current.value = 'Aswath';
    }
    
  return (
    <div>
        <input type='text' ref = {inputValue}/>
        <button onClick={() => focusInput()}>focus!</button>
    </div>
  )
}

export default UseRef1;