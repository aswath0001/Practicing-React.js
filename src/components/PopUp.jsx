import React from 'react'
{/*its an popup for the file CopyInput.jsx*/ }
import {createPortal} from 'react-dom';

const PopUp = ({copied}) => {
  return createPortal (
    <section>
        {copied&& (
            <div style={{position:'absolute', bottom:'3rem'}}>Copied to clipBoard</div>
        )}
    </section>, document.querySelector('#popup-content')
  )
}

export default PopUp