import React from 'react'

function events() {

    const handleClick = () =>{
       alert ('Button Clicked');
    };
    
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default events




