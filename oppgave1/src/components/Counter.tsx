// Startkode
import React, { useState } from 'react';


const Counter = () => {

    const [count, setCount] = useState(0); 
    const increase = () => {setCount(count + 1)}
    const decrease = () => {setCount(count - 1)}
    const reset = () => {setCount(0)}

  return (
    <div>
      <h2>Verdien er: {count}</h2>
      <button onClick={increase}>Øk</button>
      <button onClick={decrease}>Reduser</button>
      <button onClick={reset}>Nullstille</button>
    </div>
  );
};

export default Counter;