import React, {useState} from 'react';;

function forms() {
    const[name,setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Form Submitted: ${name}`);
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type='submit'>Submit</button>

        </form>
      
    </div>
  )
}

export default forms
