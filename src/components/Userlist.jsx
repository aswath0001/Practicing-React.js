import React from 'react'

const Userlist = () => {
    const users = [
        {
            id:1,
            name:'alice',
            age:25
        },
        {
            id:2,
            name:'bob',
            age:30
        },
        {
             id:3,
             name:'charlie',
             age:22
        }
    ];
  return (
    <div>
       {users.map( user =>(
      <div key= {user.id}>
        <h1>Name:{user.name}</h1>
        <h1>Age:{user.age}</h1>
      </div>
      
       ))}
    </div>
  )
}

export default Userlist