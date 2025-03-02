import React, { createContext } from 'react';
import UseContext2 from './UseContext2';

export const Data = createContext();
export const Data1 = createContext();

const Usecontext1 = () => {
    const name = 'aswath';
    const age = '21';

    return (
        <div>
            <Data.Provider value={name}>
                <Data1.Provider value={age}>
                    <UseContext2 />
                </Data1.Provider>
            </Data.Provider>
        </div>
    );
}

export default Usecontext1;
