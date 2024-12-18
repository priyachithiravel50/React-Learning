import React from 'react'
import {Link} from 'react-router-dom';

function LinkRoute() {
  return (
    <nav>
        <h1>Priya</h1>
        <ul>
            <Link to= "/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </ul>

    </nav>
        
          
        
      
    
  )
}

export default LinkRoute;
