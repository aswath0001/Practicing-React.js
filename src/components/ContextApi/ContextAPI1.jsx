import React from 'react'
import { createContext } from 'react'
import ContextAPI2 from './ContextAPI2'

export const Data = createContext()

const ContextAPI1 = () => {
    const name = 'aswath';
  return (
    <div>
        <Data.Provider value ={name}>
            <ContextAPI2/>
        </Data.Provider>
    </div>
  )
}

export default ContextAPI1