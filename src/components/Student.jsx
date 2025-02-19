import React from 'react'
import { useState } from 'react'

const Student = () => {
  const [student,setStudent] =  useState([
        {id: 1, Name: 'Aswath',Mark: 74},
        {id: 2, Name: 'Sharun',Mark: 89}
    ]
)
const click = () => {
    setStudent(
        student.map((S) => (S.id ==1 ? {...student,Name:"Aswin"}: S))
    );
}
  return (
    <div>
      {student.map(S =>(
        <li key={Math.random()}>{S.Name}</li>
      ))}
      <button onClick={click}>click</button>
    </div>
  )
}

export default Student