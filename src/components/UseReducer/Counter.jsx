import React from 'react'
import { useState,useReducer } from 'react';
import { CounterReducer,initialState } from './CounterReducer';

const Counter = () => {
   const [state,dispatch]= useReducer(CounterReducer,initialState)
   const [inputValue ,setInputValue] = useState(0);

   const handleIncrement = () => dispatch ({ type: 'increment'})
   const handleDecrement = () => dispatch ({ type: 'decrement'})

  return (
    <div>
        <h1>Count :{state.count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter