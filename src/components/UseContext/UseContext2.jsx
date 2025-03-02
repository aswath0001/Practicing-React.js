import React, { useContext } from 'react';
import { Data, Data1 } from './Usecontext1';

const UseContext2 = () => {
    const userName = useContext(Data);
    const Age = useContext(Data1);

    return (
        <div>
            <h1>My Name is {userName} and I am {Age} years old</h1>
        </div>
    );
}

export default UseContext2;
