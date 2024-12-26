import React from 'react';

function MyComponent() {
  const createError = () => {
    throw new Error("This is an error!");  
  };

  return (
    <div>
      <button onClick={createError}>Create Error</button>
    </div>
  );
}

export default MyComponent;
