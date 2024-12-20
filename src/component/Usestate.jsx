import React, { useState } from 'react'

function Usestate() {
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

export default Usestate



// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1); 
//   };

//   const decrement = () => {
//     setCount(count - 1); 
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;
