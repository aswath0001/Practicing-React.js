import React from 'react'
{/*its an popup for the file CopyInput.jsx*/ }
const PopUp = ({copied}) => {
  return (
    <section>
        {copied&& (
            <div style={{position:'absolute', bottom:'3rem'}}>Copied to clipBoard</div>
        )}
    </section>
  )
}

export default PopUp