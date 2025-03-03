import React, { useEffect, useState } from 'react'

const UseFetch = () => {

    const [value,setValue] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        . then((res) => res.json())
        .then (data => setValue(data))
    },[]);

  return (
    <div>
        {value && value.map(item =>{
            return <p key={item.id}>{item.title}</p>
        })}
    </div>
  )
}

export default UseFetch