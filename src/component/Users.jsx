import React, { useContext } from "react";
import ThemeContext from "./ThemeContext"; // Import the context

const ChildComponent = () => {
  // Access the context value using useContext
  const theme = useContext(ThemeContext);

  return <p>Current Theme: {theme}</p>;
};

export default ChildComponent;
