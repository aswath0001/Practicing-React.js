import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [post ,setPost] = useState([])
    
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json ()
        setPost(data)
      }
      fetchData();
    },[])
  return (
    <div>
        <h1>post title</h1>
        {postMessage.length > 0 ? <h2>{post[0]?.title}</h2>: <p>loading...</p>}
    </div>
  )
}

export default FetchDataEffect