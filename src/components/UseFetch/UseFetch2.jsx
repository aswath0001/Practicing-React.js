import React, { useState,useEffect } from 'react'

const useFetch2 = (url) => {
    const[value,setValue] = useState (null) 

    useEffect(() => {
            fetch(url)
            . then((res) => res.json())
            .then (data => setValue(data))
        },[]);

  return [value];
}

export default useFetch2;