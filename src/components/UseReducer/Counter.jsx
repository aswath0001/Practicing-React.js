import React from 'react'
import { useState,useReducer } from 'react';
import { CounterReducer,initialState } from './CounterReducer';

const Counter = () => {
   const [state,dispatch]= useReducer(CounterReducer,initialState)
   const [inputValue ,setInputValue] = useState(0);

   const handleIncrement = () => dispatch ({ type: 'increment'})
   const handleDecrement = () => dispatch ({ type: 'decrement'})

   const handleIncrementByAmount = () => dispatch ({type:'incrementByAmount',payload : + Number(inputValue)})
   const handleDecrementByAmount = () => dispatch ({type:'decrementByAmount',payload : + Number(inputValue)})

  return (
    <div>
        <h1>Count :{state.count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        <div>
            <input type='number' value={inputValue} onChange={e => setInputValue(e.target.value)}/>

            <button onClick={handleIncrementByAmount}>Increment By Amount</button>
            <button onClick={handleDecrementByAmount}>Decrement By Amount</button>
        </div>
    </div>
  )
}

export default Counter;