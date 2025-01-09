import React, { useState } from 'react'
import { usereducer } from 'react';

function Usereducer() {
    const name = useState('priya')

   const [count, setCount] = useState(0); 

   const increment = () => {
    setCount(count +1);
   }

   const decrement = () => {
   setCount(count - 1); 
   };
   return (
  
    <div className='button'>
      <h1>Welcome to {name}</h1>
        <p>Count: {count}</p>
        <button onClick={increment} style={{marginLeft: '20px'}}>Increment</button>
        <button onClick={decrement} style={{marginLeft: '20px'}}>Decrement</button>
    </div>
  )
}

export default Usereducer;

