
import React from 'react'
{/*import Greetings from './components/Greetings.jsx'*/}
{/*import { FiCamera } from "react-icons/fi";*/}
import StyleCard from './components/StyleCard.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import Icon from'./components/Icon.jsx'
const App = () => {
   
  {/*const styles =color:"white",backgroundColor:"orange",padding:"3rem",margin:"4rem"*/}
  return(
  <section>
   {/*<UserStatus loggedIn ={false} isAdmin= {true}/>*/}
   {/*<Greetings timeDay ='morning'/>*/}
     {/*<h1 style={styles}>
      Aswath
      </h1>*/}
     {/* <FiCamera />*/}
     <StyleCard/>
     <ProfileCard/>
     <Icon/>
  </section>
  );
};

export default App;