import { useRef } from "react"

const FocusInput = () => {

    const Input = useRef(null);

    const HandleClick = () => {
        Input.current.focus();
    }

  return (
    <div>
       <input type = 'text' ref={Input} placeholder="click to focus"/>
       <button onClick={() => HandleClick()}>Focus!</button>
    </div>
  )
}

export default FocusInput