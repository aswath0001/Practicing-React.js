import React, { useState } from 'react'
import UseState from './UseState'

const ToDoList = () => {
    const [toDo,setToDo] = useState ([])
    const[inputValue,setInputValue] = useState("");
    const handleSubmit = e => {
e.preventDefault()
if (inputValue.trim()) {
    setToDo([...toDo,inputValue])
    setInputValue("");
}
    };
    const HandleChange = e => {
    setInputValue(e.target.value)
    }
  return (
    <div>
        <h1>ToDo List</h1>
        <form onSubmit = {handleSubmit}>
            <input type ="text" value = {inputValue} onChange = {HandleChange} placeholder='Add a ToDo'/>
            <button type='submit'> Submit</button>
        </form>
        <ul>
            {toDo.map((toDo,index) =>(
                <li key={index}>{toDo}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList