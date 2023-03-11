import React, { useState } from 'react';

function FunctionCounter(props) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>{props.message}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default FunctionCounter;
