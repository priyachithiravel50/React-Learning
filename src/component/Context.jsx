import React, { createContext, useContext } from "react";

// 1. Context Create Pannudhu
const AppContext = createContext();

const Context = () => {
  // Context Data
  const userData = {
    name: "Priya",
    role: "Frontend Developer intern",
    location: "Thanjavur",
    experience: "6 month",
    company: "Ebrain Technologies",
  };

  return (
  // 2. Context Data Provide Pannudhu
    <AppContext.Provider value={userData}>
      <ParentComponent />
    </AppContext.Provider>
  );
};

// 3. Parent Component
const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildOne />
      <ChildTwo />
      <ChildThree />
      <ChildFour />
      <ChildFive />
    </div>
  );
};

// 4. Child Components (Context Data Consume Pannudhu)
const ChildOne = () => {
  const { name } = useContext(AppContext);
  return <p>Child One: Name is {name}</p>;
};

const ChildTwo = () => {
  const { role } = useContext(AppContext);
  return <p>Child Two: Role is {role}</p>;
};

const ChildThree = () => {
  const { location } = useContext(AppContext);
  return <p>Child Three: Location is {location}</p>;
};

const ChildFour = () => {
  const { experience } = useContext(AppContext);
  return <p>Child Four: Experience is {experience}</p>;
};

const ChildFive = () => {
  const { company } = useContext(AppContext);
  return <p>Child Five: Company is {company}</p>;
};

export default Context;
