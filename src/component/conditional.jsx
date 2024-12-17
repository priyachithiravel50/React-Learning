import React from 'react';

function Conditional() {
  const isLogged = false; 

  // Using if-else for more explicit conditional rendering
  if (isLogged) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }

  const isLoggedIn = false; 
  // Using ternary operator inside the component
  return (
    isLoggedIn ? (
      <h1>Welcome back!</h1>
    ) : (
      <h1>Please log in.</h1>
    )
  );
}

export default Conditional;
