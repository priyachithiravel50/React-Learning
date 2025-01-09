import React, { useState, useCallback } from 'react';

function Usecallback() {
    const [count, setCount] = useState(0);

    // Function memoize pannuren
    const increment = useCallback(() => {
        console.log("Increment called");
        setCount((prevCount) => prevCount + 1);
    }, []); // No dependencies, so memoize aagum

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Usecallback;
