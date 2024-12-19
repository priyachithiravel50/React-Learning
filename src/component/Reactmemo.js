import React, { useState } from 'react';

// Child component wrapped with React.memo
const ChildComponent = React.memo(({ count }) => {
  console.log("Child Component Rendered"); // Log to track renders
  return <h2>Child Count: {count}</h2>;
});

const Reactmemo = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React.memo Example</h1>
      <h2>Parent Count: {parentCount}</h2>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Increment Parent Count
      </button>
      <button onClick={() => setChildCount(childCount + 1)}>
        Increment Child Count
      </button>

      {/* Passing childCount as prop */}
      <ChildComponent count={childCount} />
    </div>
  );
};

export default Reactmemo;
