import React from 'react'
import { Data } from './ContextAPI1'

const ContextAPI2 = () => {
  return (
    <Data.Consumer>
     {(name) => {
        return<h1>{name}</h1>
     }}
    </Data.Consumer>
  )
}

export default ContextAPI2