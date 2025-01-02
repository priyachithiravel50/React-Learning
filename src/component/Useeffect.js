import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Useeffect() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ Name: '', Password: '' });
  const [errors, setErrors] = useState({ Name: '', Password: '', Terms: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id === 'name' ? 'Name' : 'Password']: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id === 'name' ? 'Name' : 'Password']: '' }));
  };

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
    setErrors((prevErrors) => ({ ...prevErrors, Terms: '' }));
  };

  const handleSubmit = async () => {
    const { Name, Password } = form;

    let formIsValid = true;
    let validationErrors = { Name: '', Password: '', Terms: '' };

    if (!Name) {
      validationErrors.Name = 'Username is required';
      formIsValid = false;
    }

    if (!Password) {
      validationErrors.Password = 'Password is required';
      formIsValid = false;
    }

    if (!agreed) {
      validationErrors.Terms = 'You must agree to the terms and conditions';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(validationErrors);
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
      alert('Form Submitted Successfully!');
      navigate('/display', { state: { Name, Password } });
      setForm({ Name: '', Password: '' });
      setAgreed(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div style={{ margin: '50px auto', width: '300px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }} className='text'>
      <h1 style={{ color: '#203864' }}>Login Form</h1>

      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
        <label>Name:</label>
        <input
          type='text'
          id='name'
          autoComplete='off'
          value={form.Name}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        {errors.Name && <span style={{ color: 'red' }}>{errors.Name}</span>}
      </div>

      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
        <label>Password:</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            autoComplete='off'
            value={form.Password}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <i
            className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        {errors.Password && <span style={{ color: 'red' }}>{errors.Password}</span>}
      </div>

      
      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
  <label style={{ display: 'inline-flex', alignItems: 'center', fontSize: '14px', whiteSpace: 'nowrap' }}>
    <input 
      type="checkbox" 
      checked={agreed} 
      onChange={handleCheckboxChange} 
      style={{ marginRight: '5px', transform: 'scale(1.3)' }} 
    />
    I agree to the  <a href="#" style={{ textDecoration: 'underline', color: 'blue' }}> terms and conditions</a>.
  </label>
  {errors.Terms && <span style={{ color: 'red', display: 'block', marginTop: '5px' }}>{errors.Terms}</span>}
</div>





      <button
        onClick={handleSubmit}
        // style={{
        //   padding: '10px 20px',
        //   backgroundColor: '#203864',
        //   color: '#fff',
        //   border: 'none',
        //   borderRadius: '5px',
        //   cursor: 'pointer',
        // }}
      >
        Submit
      </button>
    </div>
  );
}

export default Useeffect;










// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// function Useeffect() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({ Name: '', Password: '' });
//   const [errors, setErrors] = useState({ Name: '', Password: '' }); // Error state

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setForm((prevForm) => ({ ...prevForm, [id === 'name' ? 'Name' : 'Password']: value }));

//     // Clear the error message when the user starts typing
//     setErrors((prevErrors) => ({ ...prevErrors, [id === 'name' ? 'Name' : 'Password']: '' }));
//   };

//   const handleSubmit = async () => {
//     const { Name, Password } = form;

//     let formIsValid = true;
//     let validationErrors = { Name: '', Password: '' };

//     // Field validation
//     if (!Name) {
//       validationErrors.Name = 'Username is required';
//       formIsValid = false;
//     }

//     if (!Password) {
//       validationErrors.Password = 'Password is required';
//       formIsValid = false;
//     }

//     if (!formIsValid) {
//       setErrors(validationErrors); // Set error messages
//       return;
//     }

//     try {
//       const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/useeffect', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ Name, Password }),
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Response was not ok: ${errorText}`);
//       }

//       const data = await response.json();
//       console.log('data:', data);
//       alert('Form Submitted Successfully!');

//       // Navigate to the display page with form data
//       navigate('/display', { state: { Name, Password } });

//       // Reset the form
//       setForm({ Name: '', Password: '' });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('There was an error submitting the form.');
//     }
//   };

//   return (
//     <div className='text'>
//       <i className="fa-solid fa-user-circle" id="server"></i>
//       <h1 style={{ marginLeft: '70px', color: '#203864', display: 'block' }}>Login Form</h1>

//       <label>Name:</label> <br />
//       <input
//         type='text'
//         id='name'
//         autoComplete='off'
//         value={form.Name}
//         onChange={handleChange}
//         required
//       />
//       {errors.Name && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.Name}</span>} {/* Error for Name */}
//       <br />

//       <div style={{ marginTop: '10px' }}>
//         <label>Password:</label> <br />
//         <input
//           type='text'
//           id='password'
//           autoComplete='off'
//           value={form.Password}
//           onChange={handleChange}
//           required
//         />
//         {errors.Password && <span style={{ color: 'red', marginLeft: '10px' }}>{errors.Password}</span>} {/* Error for Password */}
//       </div>
//       <br />

//       <button onClick={handleSubmit}>Submit</button>
//       <br />
//       <p style={{ marginLeft: '60px',display:'block' }}>
//         Login to the account{" "}
//         <a
//           href="#"
//           id='sign'
//           onClick={() => navigate("/useeffects")}
//           className="btn"
//         >
//           Sign In
//         </a>
//       </p>
//     </div>
//   );
// }

// export default Useeffect;




























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

