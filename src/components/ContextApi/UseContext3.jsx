import React, { createContext } from 'react';
import UseContext4 from './UseContext4';

export const Data = createContext();
export const Data1 = createContext();
const UseContext3 = () => {
    const role = 'Developer';
    const salary ='35000';
  return (
    <div>
      <Data.Provider value  = {role}>
        <Data1.Provider value  = {salary}>
          <UseContext4/>
        </Data1.Provider>
      </Data.Provider> 
    </div>
  )
}

export default UseContext3