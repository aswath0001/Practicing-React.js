import React from 'react'
import { createContext } from 'react'
import ContextAPI2 from './ContextAPI2'

export const Data = createContext()
export const Data1 = createContext()
const ContextAPI1 = () => {
    const name = 'aswath';
    const age = '22';
  return (
    <div>
        <Data.Provider value ={name}>
            <ContextAPI2/>
        </Data.Provider>
        <Data1.Provider value ={age}>
            <ContextAPI2/>
        </Data1.Provider>
    </div>
  )
}

export default ContextAPI1