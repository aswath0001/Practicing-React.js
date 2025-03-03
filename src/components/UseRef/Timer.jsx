import { useRef,useState,useEffect } from "react"

const Timer = () => {

    const [count,setCount] = useState(0);
    
    const initialValue = useRef (null)

    useEffect(() => {
        initialValue.current = setInterval(() => {
            setCount(prevCount => prevCount +1)
        },1000)

        return () => {
            clearInterval(initialValue.current)
        };
    },[]);

  return (
    <div>
       <h1>timer:{count}</h1>
       <button onClick={() => clearInterval(initialValue.current)}>Stop Timer</button>
    </div>
  )
};

export default Timer;