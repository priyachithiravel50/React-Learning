import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Useeffect() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ Name: '', Password: '' });
  const [errors, setErrors] = useState({ Name: '', Password: '' }); // Error state

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id === 'name' ? 'Name' : 'Password']: value }));

    // Clear the error message when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [id === 'name' ? 'Name' : 'Password']: '' }));
  };

  const handleSubmit = async () => {
    const { Name, Password } = form;

    let formIsValid = true;
    let validationErrors = { Name: '', Password: '' };

    // Field validation
    if (!Name) {
      validationErrors.Name = 'Username is required';
      formIsValid = false;
    }

    if (!Password) {
      validationErrors.Password = 'Password is required';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(validationErrors); // Set error messages
      return;
    }

    try {
      const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/useeffect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name, Password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Response was not ok: ${errorText}`);
      }

      const data = await response.json();
      console.log('data:', data);
      alert('Form Submitted Successfully!');

      // Navigate to the display page with form data
      navigate('/display', { state: { Name, Password } });

      // Reset the form
      setForm({ Name: '', Password: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className='text'>
      <i className="fa-solid fa-user-circle" id="server"></i>
      <h1 style={{ marginLeft: '70px', color: '#203864', display: 'block' }}>Login Form</h1>

      <label>Name:</label> <br />
      <input
        type='text'
        id='name'
        autoComplete='off'
        value={form.Name}
        onChange={handleChange}
        required
      />
      {errors.Name && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.Name}</span>} {/* Error for Name */}
      <br />

      <div style={{ marginTop: '10px' }}>
        <label>Password:</label> <br />
        <input
          type='text'
          id='password'
          autoComplete='off'
          value={form.Password}
          onChange={handleChange}
          required
        />
        {errors.Password && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.Password}</span>} {/* Error for Password */}
      </div>
      <br />

      <button onClick={handleSubmit}>Submit</button>
      <br />
      <p style={{ marginLeft: '60px',display:'block' }}>
        Login to the account{" "}
        <a
          href="#"
          id='sign'
          onClick={() => navigate("/useeffects")}
          className="btn"
        >
          Sign In
        </a>
      </p>
    </div>
  );
}

export default Useeffect;




























// import React from 'react'
// import { useNavigate } from "react-router-dom"; 
// import Usestate from './Usestate';
// // import Usestate from './Usestate'

// function Useeffect() {
//   const navigate = useNavigate();
//   const goToRegister = () => {
//     navigate("/useeffects"); 
//   };



//   return (
//     <div className='text' >
//       <i class="fa-solid fa-user-circle" id="server"></i>
//        <h1 style={{marginLeft:'70px',color: '#203864',display:'block'}}>Login Form</h1>
//        <label>Name:</label> <br/>
//       <input type='text' id='name' autoComplete='off'/>
//      <br/>
//      <div style={{marginTop:'10px'}}>
//       <label>Password:</label> <br/>
//       <input type='text' id='password' autoComplete='off'/>
//       </div>
//      <br/>
//       <button >submit</button>
//       <br/>
//       <a href="#" id='sign' onClick={goToRegister} className="btn btn-danger d-block">Sign In
//         </a>
//     </div>
//   )
// }

// export default Useeffect















// import React, { useEffect, useState } from 'react'

// function Useffect() {
//     const name = useState('priya')

//    const [count, setCount] = useState(0); 
//    const [counter, setCounter] = useState(0); 


//    useEffect(() => {
//     console.log('inside useeffect')

//    },[count,counter])

//    const increment = () => {
//     setCount(count +1);
//    }

//    const decrement = () => {
//    setCounter(counter - 1); 
//    };
//    return (
  
//     <div className='button'>
//       <h1>Welcome to {name}</h1>
//         <p>Count: {count}</p>
//         <button onClick={increment} style={{marginLeft: '20px'}}>Increment</button>
//         <p>Count: {counter}</p>
//         <button onClick={decrement} style={{marginLeft: '20px'}}>Decrement</button>
//     </div>
//   )
// }

// export default Useffect



// import React, { useEffect, useState } from 'react'

// function Useeffect() {
//     const[num1,setNum1] = useState(100);
//     const[num2,setNum2] = useState(1000);

//     useEffect(()=>{
//         setNum1(200);
//         console.log('inside useeffect');
      

//         // return () =>{
//         //     setNum1(100);
//         //     console.log("memory cleaned");
            
//         // };
        

//     },[num1,num2])

  

//     // console.log("num1",num1,num2);
    
//   return (
//     <div>+
//         <h1>{num1}</h1>   
//         <button onClick={() => setNum1((curr) => curr+1)}>Add</button>  
//         <h1>{num2}</h1>   
//         <button onClick={() => setNum2((curr) => curr+1)}>Add</button>  
//     </div>
//   )
// }

// export default Useeffect

