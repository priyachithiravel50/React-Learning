// import React from 'react';

// function Conditional() {
//   const isLogged = false; 

//   // Using if-else for more explicit conditional rendering
//   if (isLogged) {
//     return <h1>Welcome back!</h1>;
//   } else {
//     return <h1>Please log in.</h1>;
//   }

//   const isLoggedIn = false; 
//   // Using ternary operator inside the component
//   return (
//     isLoggedIn ? (
//       <h1>Welcome back!</h1>
//     ) : (
//       <h1>Please log in.</h1>
//     )
//   );
// }

// export default Conditional;


import React from 'react'

function Conditional() {

    // If else method
    const name = true
    let result = false

    if(name === true){
        result = <h1>Welcome back!</h1>
    }
    else{
        result = <h1>Please log in.</h1>
    }

    //Ternary Operator
    const x = 50
    let y = x === 13 ? <h1>Number is Available</h1> : <h1>Number is Not Available</h1>

       // AND&& Operator
    let z = x === 50 && <h1>Rendering</h1>  

  return (  
    <div>
      {result}
      {y}
      {z}
    </div>
  )
}

export default Conditional