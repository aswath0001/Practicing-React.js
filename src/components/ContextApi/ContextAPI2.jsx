import React from 'react'
import { Data } from './ContextAPI1';
import { Data1 } from './ContextAPI1';

const ContextAPI2 = () => {
  return (
    <div>
    <Data.Consumer>
     {(name) => {
        return<h1>{name}</h1>
     }}
    </Data.Consumer>
    <Data1.Consumer>
     {(age) => {
        return<h1>{age}</h1>
     }}
    </Data1.Consumer>
    </div>
  )
}

export default ContextAPI2