import React, {useState , useEffect } from 'react';


const DataUsingUseEffect = () => {
    const [data,setData] = useState([])
    useEffect(() => {
     async function getData() {
     const response  =    await fetch('https://jsonplaceholder.typicode.com/posts')
     const data = await response.json()
     if(data && data.length) setData(data)
     }
    getData();
    },[]);
  return (
    <div>
       <ul>
       {data.map(todo =>(
       <section key = {todo.id}>
         <li key={todo.id}>{todo.title}</li>
         <li key={todo.id}>Body:{todo.body}</li>
       </section>
        ))}
       </ul>
    </div>
  )
};

export default DataUsingUseEffect;