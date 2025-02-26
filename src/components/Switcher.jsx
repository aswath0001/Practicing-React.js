import React, { useState } from 'react'

const Switcher = () => {
 
    const [switcher,setSwitcher] = useState (false);

  return (
    <div>
        {switcher ? (
            <span>Dark</span>
        ) :
        (
            <span>light</span>
        ) }
        <br/>
        <input type = "text" key ={ sw ? "dark":"light"}/>
        <button onClick={() => setSwitcher((s) => !s)}>Switch</button>
    </div>
  )
}

export default Switcher