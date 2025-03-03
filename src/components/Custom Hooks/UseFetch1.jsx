import useFetch2 from "./UseFetch2";
import React from "react";
const UseFetch1 = () => {

   const [value] = useFetch2("https://jsonplaceholder.typicode.com/todos")

  return (
    <div>
        {value && 
        value.map(item =>{
            return <p key={item.id}>{item.title}</p>
        })}
    </div>
  )
}

export default UseFetch1;