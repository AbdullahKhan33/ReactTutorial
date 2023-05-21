import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [otherVariable, setOtherVariable] = useState('Hello');

  // Define the callback function using useCallback
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Other Variable: {otherVariable}</p>
      <ChildComponent onIncrement={increment} />
      <button onClick={() => setOtherVariable('Hello World')}>
        Update Other Variable
      </button>
    </div>
  );
};

export default ParentComponent;
