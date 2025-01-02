// import React from 'react'

// function create() {
//   return (
//     <div>
//     <h1>Front end developer</h1>
//     </div>
//   )
// }

// export default create



import React from 'react';
import { Button } from '@mui/material'; // MUI Button import pannirukom.

const create = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to MUI</h1>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
};

export default create;
