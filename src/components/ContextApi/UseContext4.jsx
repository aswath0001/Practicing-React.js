import React from 'react'
import {Data1,Data} from './UseContext3'


const UseContext4 = () => {
  return (
    <div>
        <Data.Consumer>
      {(role) => (
        <h1>{role}</h1>
      )}
        </Data.Consumer>
        <Data1.Consumer>
      {(salary) => (
        <h1>{salary}</h1>
      )}
        </Data1.Consumer>
    </div>
  )
}

export default UseContext4;