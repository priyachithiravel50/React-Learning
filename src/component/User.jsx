// import React from "react";
// import ThemeContext from "./ThemeContext"; // Import the context
// import ChildComponent from "./ChildComponent"; // Import the child component

// const App = () => {
//   return (
//     // Provide a value to the context
//     <ThemeContext.Provider value="dark">
//       <div>
//         <h1>React useContext Example</h1>
//         <ChildComponent />
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default App;

import React, { createContext, useContext } from "react";

const ThemeContext = createContext(); // Create Context

const App = () => {
  // Provide the value
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
};

const ChildComponent = () => {
  const theme = useContext(ThemeContext); // Access context value

  return <div>Current Theme: {theme}</div>;
};

export default App;
