import { useId } from "react"

const UniqueId = () => {

    const RollNo = useId();
    const RollNo2 = useId();
    
  return (
    <div>
        <label htmlFor={`${RollNo}`}>Email</label>
        <input type ='email' RollNo ={`${RollNo}`}/>
<br/>
        <label htmlFor={`${RollNo2}`}>Password</label>
        <input type ='password' RollNo2 ={`${RollNo}`}/>

    </div>
  )
}

export default UniqueId