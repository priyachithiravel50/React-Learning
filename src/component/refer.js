// // import React from 'react'

// // function Useref() {
// //     // const[input,setinput] = useState("")
// //     console.log('Getting rerendered');
// //     const[inputref] = Useref('1');
    
// //   return (
// //     <div>
// //       <h1>Developer</h1>
// //       <input ref={inputref} type='text'></input>

// //       <button>Submit</button>
// //     </div>

// //   )
// // }

// // export default Useref



// import React, { useRef, useState, useEffect } from "react";

// function Refer() {
//     // DOM element reference
//     const inputRef = useRef(null);

//     // Mutable value (does not re-render)
//     const countRef = useRef(0);

//     // Previous state track
//     const prevCount = useRef(null);

//     // State for UI update
//     const [count, setCount] = useState(0);

//     // Update previous count whenever count changes
//     useEffect(() => {
//         prevCount.current = count;
//     }, [count]);

//     // Focus input box
//     const handleFocus = () => {
//         inputRef.current.focus();
//     };

//     // Increment count and ref
//     const increment = () => {
//         countRef.current += 1; // Update ref (does not trigger re-render)
//         setCount(count + 1); // Update state (triggers re-render)
//     };

//     return (
//         <div>
//             {/* DOM Manipulation Example */}
//             <input type="text" ref={inputRef} placeholder="Type here..." />
//             <button onClick={handleFocus}>Focus Input</button>

//             <hr />

//             {/* Mutable Value Example */}
//             <p>Ref Count (No Re-render): {countRef.current}</p>
//             <p>State Count (Re-renders): {count}</p>
//             <button onClick={increment}>Increment Count</button>

//             <hr />

//             {/* Previous State Example */}
//             <p>Current Count: {count}</p>
//             <p>Previous Count: {prevCount.current}</p>
//         </div>
//     );
// }

// export default Refer;




import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);  // Create a ref to access the input element directly

  const handleFocus = () => {
    inputRef.current.focus();  // Focus the input element directly
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
};

export default FocusInput;