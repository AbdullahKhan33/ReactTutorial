import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Define the callback function using useCallback
  function increment() {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
