import React from 'react'
import { useState } from 'react';

const Random = () => {
    const [randomNumber,setRandomNumber] = useState(() =>
    Math.floor (Math.random() * 10)
    );
    const generateNewNumber =() => {
        const newNumber = Math.floor(Math.random()*10)
        setRandomNumber(newNumber)
    };
  return (
    <div>
        <h1>
            Random Number:{randomNumber}
            <button onClick={generateNewNumber}>
                Generate new number
            </button>
        </h1>
    </div>
  );
};

export default Random