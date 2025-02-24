import React, { useState } from 'react'
import UseState from 'react';

const Profile = () => {
  const [profile,setProfile] =   useState ({
        name :'',
        age : ''
    });
    const handleChange = (e) => {
         const {name , value} = e.target;
         setProfile ((previousProfile) = ({
            ...previousProfile,
            [name]: value,
         }))
    };
  return (
    <div>
        <h1>Profile</h1>
        <div>
            <label >Name: 
                <input type='text' name='Name'value ={profile.name} onChange={handleChange}/>
            </label>
        </div>
        <div>
        <label >Age: 
                <input type='number' name='Age'value ={profile.age} onChange={handleChange}/>
            </label>
        </div>
        <h2>Profile Data</h2>
        <p>Name:{profile.name}</p>
        <p>Name:{profile.age}</p>
    </div>
  )
}

export default Profile