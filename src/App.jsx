
import React from 'react'
import Greetings from './components/Greetings.jsx'

const App = () => {
  return(
  <div>
   {/*<UserStatus loggedIn ={false} isAdmin= {true}/>*/}
   <Greetings timeDay ='morning'/>
  </div>
  );
};

export default App;