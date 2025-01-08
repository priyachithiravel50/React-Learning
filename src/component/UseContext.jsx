
import React, { createContext, useContext } from "react";

// 1. Context Create Pannudhu
const UserContext = createContext();

const UseContext = () => {
  // 2. Context-ku Data Provide Pannudhu
  const user = { name: "Kumar", role: "Frontend Developer" };

  return (
    <UserContext.Provider value={user}>
      <Header />
      <Content />
    </UserContext.Provider>
  );
};

// 3. Header Component (Context Data Access)
const Header = () => {
  const user = useContext(UserContext); // Data consume
  return <h1>Welcome, {user.name}!</h1>;
};

// 4. Content Component (Context Data Access)
const Content = () => {
  const user = useContext(UserContext);
  return <p>Your role is: {user.role}</p>;
};

export default UseContext;