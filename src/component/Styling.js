import React from 'react'
import styles from './demo.module.css'

function Styling() {
    const React = {
        backgroundColor: 'blue',
    }
  return (
    <div>
        <h1 style={{backgroundColor:'red'}} >React is an Javascript library</h1>

        <h2 style={React}>Function Component is used react,it is easy to manage</h2>

        <h2 className='alert'>Virtual DOM is used effectiuvely</h2>

        <h2 className= {styles.default}>React is developed by Facebook</h2>
      
    </div>
  )
}

export default Styling
