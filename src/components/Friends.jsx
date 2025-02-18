import React from 'react'
import { useState } from 'react'

const Friends = () => {
    const [friends,setFriends] = useState(["Ram" , "Sam"]);
    const addNewFriend = () => setFriends([...friends,"Gil"]);
    const removeFriend = () => setFriends(friends.filter(f => f !='Ram'))
    const updateFriend = () => setFriends(friends.map(f => f == 'Gil' ?'Gil Christ':f))
  return (
    <div>
       {friends.map( f=>(
        <li key = {Math.random()}>{f}</li>
       ))}
       <button onClick={addNewFriend}>Add new friend</button>
       <button onClick={removeFriend}>remove a  friend</button>
       <button onClick={updateFriend}>Update a  friend</button>
    </div>
  )
}

export default Friends