import React, { useState } from 'react'

function StateExample() {
    // let user = "React"
    const[user,SetUser] = useState('React')

    const changeName = () =>{
       SetUser('JAVASCRIPT')
        console.log(user)

        // const[counter,SetCounter] = useState({value:100,type:'counter'})

        // const increment = () =>{
        //     SetCounter((prevCounter) =>{
        //         return {value:prevCounter.value+3}
        //     })
        // }

        // const decrement = () =>{
        //     SetCounter((prevCounter) =>{
        //         return {value:prevCounter.value+3}
        //     })
        // }


    }
      return ( 
    <div className='btn'>
        <>
       <h3>{user}</h3>
       <button onClick={changeName}>ChangeName</button>
{/* 
       <h3>{`counter value is ${counter.value}`}</h3>
       <button onClick={increment}>+3</button>
       <button onClick={decrement}>-3</button> */}
        </>
      
    </div>
  )
}

export default StateExample




