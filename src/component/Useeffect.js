// import React, { useEffect, useState } from 'react'

// function Useffect() {
//     // const name = useState('priya')

//    const [count, setCount] = useState(0); 
//    const [counter, setCounter] = useState(0); 


//    useEffect(() => {
//     console.log('inside useeffect')

//    },[count])

//    const increment = () => {
//     setCount(count +1);
//    }

//    const decrement = () => {
//    setCounter(counter - 1); 
//    };
//    return (
  
//     <div className='button'>
//       {/* <h1>Welcome to {name}</h1> */}
//         <p>Count: {count}</p>
//         <button onClick={increment} style={{marginLeft: '20px'}}>Increment</button>
//         <p>Count: {counter}</p>
//         <button onClick={decrement} style={{marginLeft: '20px'}}>Decrement</button>
//     </div>
//   )
// }

// export default Useffect



import React, { useEffect, useState } from 'react'

function Useeffect() {
    const[num1,setNum1] = useState(100);
    const[num2,setNum2] = useState(1000);

    useEffect(()=>{
        setNum1(200);
        console.log('inside useeffect');
      

        return () =>{
            setNum1(100);
            console.log("memory cleaned");
            
        };
        

    },[num1,num2])

  

    // console.log("num1",num1,num2);
    
  return (
    <div>+
        <h1>{num1}</h1>   
        <button onClick={() => setNum1((curr) => curr+1)}>Add</button>  
        <h1>{num2}</h1>   
        <button onClick={() => setNum2((curr) => curr+1)}>Add</button>  
    </div>
  )
}

export default Useeffect

