import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function UseEffects() {
  const navigate = useNavigate();
     const goToLogin = () => {
        navigate("/useeffect");
      };
    

  // State for form data
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
    address: '',
    state: '',
    country: '',
  });

  // State for error messages
  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));

    // Clear the error for the current field
    setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, number, password, confirmPassword, address, state, country } = form;

    // Validation
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!number) newErrors.number = "Phone number is required";
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!address) newErrors.address = "Address is required";
    if (!state) newErrors.state = "State is required";
    if (!country) newErrors.country = "Country is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, number, password, address, state, country }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Form data submitted:", data);
      alert("Form Submitted Successfully!");

      // Navigate to the display page with form data
      navigate('/displayform', { state: { formData: data } });

      // Reset form
      setForm({
        name: '',
        email: '',
        number: '',
        password: '',
        confirmPassword: '',
        address: '',
        state: '',
        country: '',
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className='text1'>
      <h1 style={{ marginLeft: '70px', color: '#203864', display: 'block', marginTop: '10px' }}>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' id='name' value={form.name} onChange={handleChange} autoComplete='off' />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <label>Email:</label>
        <input type='text' id='email' value={form.email} onChange={handleChange} autoComplete='off' />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <label>Phone no:</label>
        <input type='number' id='number' value={form.number} onChange={handleChange} autoComplete='off' />
        {errors.number && <p style={{ color: 'red' }}>{errors.number}</p>}

        <label>Password:</label>
        <input type='password' id='password' value={form.password} onChange={handleChange} autoComplete='off' />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

        <label>Confirm Password:</label>
        <input type='password' id='confirmPassword' value={form.confirmPassword} onChange={handleChange} autoComplete='off' />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}

        <label>Address:</label>
        <input type='text' id='address' value={form.address} onChange={handleChange} autoComplete='off' />
        {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

        <label>State:</label>
        <select id='state' value={form.state} onChange={handleChange}>
          <option value="" disabled>Select State</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Gujarat">Gujarat</option>
        </select>
        {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}

        <label>Country:</label>
        <select id='country' value={form.country} onChange={handleChange}>
          <option value="" disabled>Select Country</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="London">London</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Singapore">Singapore</option>
        </select>
        {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}

        <button type="submit" id='button'>Submit</button>

        <p style={{marginLeft:'120px'}}>Login to the account! <a href="#" id='sign' onClick={goToLogin} className="btn btn-danger d-block"> Sign In</a></p>
      </form>
    </div>
  );
}

export default UseEffects;












// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// function UseEffects() {
//   const navigate = useNavigate();

//   // State for form data
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     number: '',
//     password: '',
//     confirmPassword: '',
//     address: '',
//     state: '',
//     country: '',
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setForm((prev) => ({ ...prev, [id]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, email, number, password, confirmPassword, address, state, country } = form;

//     // Validation
//     if (!name || !email || !number || !password || !confirmPassword || !address || !state || !country) {
//       alert("All fields are required");
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch('https://6729a5066d5fa4901b6dcac9.mockapi.io/LoginForm/Login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, number, password, address, state, country }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Form data submitted:", data);
//       alert("Form Submitted Successfully!");

//       // Navigate to the display page with form data
//       navigate('/displayform', { state: { formData: data } });

//       // Reset form
//       setForm({
//         name: '',
//         email: '',
//         number: '',
//         password: '',
//         confirmPassword: '',
//         address: '',
//         state: '',
//         country: '',
//       });

//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit form.");
//     }
//   };

//   const goToLogin = () => {
//     navigate("/useeffect");
//   };

//   return (
//     <div className='text1'>
//       <h1 style={{ marginLeft: '70px', color: '#203864', display: 'block', marginTop: '10px' }}>Register Form</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type='text' id='name' value={form.name} onChange={handleChange} autoComplete='off' />
        
//         <div style={{ marginTop: '10px' }}>
//           <label>Email:</label>
//           <input type='text' id='email' value={form.email} onChange={handleChange} autoComplete='off' />
//           <label>Phone no:</label>
//           <input type='number' id='number' value={form.number} onChange={handleChange} autoComplete='off' />
//           <label>Password:</label>
//           <input type='password' id='password' value={form.password} onChange={handleChange} autoComplete='off' />
//           <label>Confirm Password:</label>
//           <input type='password' id='confirmPassword' value={form.confirmPassword} onChange={handleChange} autoComplete='off' />
//           <label>Address:</label>
//           <input type='text' id='address' value={form.address} onChange={handleChange} autoComplete='off' />
//           <label>State:</label>
//           <br />
//           <select id='state' value={form.state} onChange={handleChange}>
//             <option value="" disabled>Select State</option>
//             <option value="Tamil Nadu">Tamil Nadu</option>
//             <option value="Kerala">Kerala</option>
//             <option value="Karnataka">Karnataka</option>
//             <option value="Andhra Pradesh">Andhra Pradesh</option>
//             <option value="Gujarat">Gujarat</option>
//           </select>
//           <br />
//           <label>Country:</label>
//           <br />
//           <select id='country' value={form.country} onChange={handleChange}>
//             <option value="" disabled>Select Country</option>
//             <option value="India">India</option>
//             <option value="Australia">Australia</option>
//             <option value="London">London</option>
//             <option value="Afghanistan">Afghanistan</option>
//             <option value="Singapore">Singapore</option>
//           </select>
//         </div>
//         <button type="submit" id='button'>Submit</button>
//       </form>
//      <p style={{marginLeft:'90px'}}>Login to the account! <a href="#" id='sign' onClick={goToLogin} className="btn btn-danger d-block"> Sign In</a></p>
//     </div>
//   );
// }

// export default UseEffects;





// // import React from 'react'
// // import { useNavigate } from "react-router-dom"; 
// // function UseEffects() {
// //      const navigate = useNavigate();
// //      const goToLogin= () => {
// //         navigate("/useeffect"); 
// //       };

// //   return (
// //     <div className='text1' >
// //        <h1 style={{marginLeft:'70px',color: '#203864',display:'block',marginTop:'10px'}}>Register Form</h1>
// //        <label>Name:</label> 
// //       <input type='text' id='name'   autoComplete='off'/>
// //      <div style={{marginTop:'10px'}}>
// //       <label>Email:</label> 
// //       <input type='text' id='email' autoComplete='off'/>
// //       <label>Phone no:</label> 
// //       <input type='number' id='number' autoComplete='off'/>

// //       <label>Password:</label> 
// //       <input type='text' id='password' autoComplete='off'/>

// //       <label>Correct Password:</label> 
// //       <input type='text' id='password' autoComplete='off'/>

// //       <label>Address:</label> 
// //       <input type='text' id='password' autoComplete='off'/>

// //       <label>State:</label> 
// //       <br/>
// //       <select>
// //         <option value="" disabled selected></option>
// //         <option value="">Tamil Nadu</option>
// //         <option value="">Kerala</option>
// //         <option value="">Karnataka</option>
// //         <option value="">Andhra Pradesh</option>
// //         <option value="">Gujarat</option>
// //       </select>
// //       {/* <input type='text' id='password' autoComplete='off'/> */}
// //        <br/>
// //       <label>Country:</label> 
// //       <br/>
// //       <select>
// //         <option value="" disabled selected></option>
// //         <option value="">India</option>
// //         <option value="">Australia</option>
// //         <option value="">London</option>
// //         <option value="">Afganistan</option>
// //         <option value=" ">Singapore</option>
// //       </select>
// //       {/* <input type='text' id='password' autoComplete='off'/> */}

// //       </div>
// //       <button>submit</button>
// //       <br/>
// //       <a href="#" id='sign' onClick={goToLogin} className="btn btn-danger d-block">Sign In
// //         </a>
// //     </div>
// //   )
// // }

// // export default UseEffects
