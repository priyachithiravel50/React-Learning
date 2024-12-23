import React, { useState } from 'react'

function Usestateform() {
    const[Name,setName] = useState('')
    const[status,setstatus] = useState('')
    const[select,setselect] = useState('')

    const handleNamechange = (e) =>{
        setName(e.target.value);
    };
    const handlestatuschange = (e) =>{
        setstatus(e.target.value);
    };
    const handleselectchange = (e) =>{
        setselect(e.target.value);
    };
    const handleReset = () =>{
        setName('');
        setstatus('');
        setselect('');
    }


    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!Name||!status||!select){
            alert('All fields are Reqiured');
            return;
        }

        alert('Form Submitted Successfully!')
        console.log('Form Submitted:',{Name,status,select});
        handleReset();
  
    }
  
  return (
    <div className='form'>
    
  <form onSubmit={handleSubmit}>
  <h2 style={{marginLeft:'110px',marginTop:'10px'}}>Form</h2>
  
    <div class="form-group">
      <label for="title">Choose a title:</label><br />
      <select value={Name} onChange={handleNamechange} required>
        <option value="" disabled selected>Select a title</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="bootstrap">Bootstrap</option>
        <option value="js">JavaScript</option>
        <option value="react">React</option>
      </select>
    </div>


   
    <div class="form-group">
      <label for="status">Select Status:</label><br />
      <select value={status} onChange={handlestatuschange} required>
        <option value="" disabled selected>Select an option</option>
        <option value="learning">Learning</option>
        <option value="completed">Completed</option>
      </select>
    </div>

      
    <div class="form-group">
      <label for="status">Select:</label><br />
      <select value={select} onChange={handleselectchange} required>
        <option value="" disabled selected>Select an option</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </div>
    
    <button type="submit">Submit</button>
    </form>




    </div>
  )
}

export default Usestateform
